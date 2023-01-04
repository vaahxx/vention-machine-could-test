import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Product } from "@ventionMachineCloudTest/models"

import { ProductService } from "./product.service"

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService],
  exports: [ProductService],
  controllers: [],
})
export class ProductServiceModule {}
