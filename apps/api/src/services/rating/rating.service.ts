import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm"
import { Rating } from "@ventionMachineCloudTest/models"
import { Repository } from "typeorm"

@Injectable()
export class RatingService extends TypeOrmCrudService<Rating> {
  constructor(@InjectRepository(Rating) repository: Repository<Rating>) {
    super(repository)
  }
}
