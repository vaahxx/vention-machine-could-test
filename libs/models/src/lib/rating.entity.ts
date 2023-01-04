import { Max, Min, MinLength } from "class-validator"
import { Column, Entity } from "typeorm"

import { RootEntity } from "./root.entity"

@Entity()
export class Rating extends RootEntity {
  @Column({ nullable: false })
  product_id: number

  @Column({ nullable: false })
  @Min(0, { always: true })
  @Max(5, { always: true })
  value: number
}
