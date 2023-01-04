import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Product, Rating } from "@ventionMachineCloudTest/models"

import { RatingService } from "./rating.service"

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
  providers: [RatingService],
  exports: [RatingService],
  controllers: [],
})
export class RatingServiceModule {}
