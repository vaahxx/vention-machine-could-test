import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Product } from "@ventionMachineCloudTest/models"

import { ProductServiceModule } from "../../services/product/product-service.module"
import { ProductService } from "../../services/product/product.service"
import { ProductController } from "./product.controller"

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ProductServiceModule],
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
