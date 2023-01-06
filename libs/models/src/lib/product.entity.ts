import { Column, Entity, OneToMany } from "typeorm"

import { Rating } from "./rating.entity"
import { RootEntity } from "./root.entity"

@Entity()
export class Product extends RootEntity {
  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  image: string

  @Column({ nullable: false, type: "int" })
  price: number

  @OneToMany(() => Rating, rating => rating.product_id)
  avg_rating: number

  @Column({ nullable: false })
  in_cart: boolean
}
