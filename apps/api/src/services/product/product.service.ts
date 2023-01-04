import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Product } from "@ventionMachineCloudTest/models"
import { Repository } from "typeorm"

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private repository: Repository<Product>) {}

  findAll(): Promise<Product[]> {
    return this.repository.query(`
      with product_ratings as (
        select r.product_id, FLOOR(AVG(r.value)) as avg_rating
        from rating r
        inner join product p on r.product_id = p.id
        where p.id = r.product_id
        group by r.product_id
      )
      select
        id
        , name
        , image
        , price
        , avg_rating
      from product p
      inner join product_ratings pr ON pr.product_id = p.id
    `)
  }
}
