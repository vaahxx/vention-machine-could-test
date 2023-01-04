import { Controller, Get, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { Product } from "@ventionMachineCloudTest/models"

import { ProductService } from "../../services/product/product.service"

@ApiTags("products")
@Controller("products")
export class ProductController {
  constructor(public service: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.service.findAll()
  }
}
