import { Body, Controller, Get, Param, Patch, Put } from "@nestjs/common"
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

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Product> {
    return this.service.findOne(Number(id))
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() productDto: Product) {
    return this.service.update(Number(id), productDto)
  }
}
