import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Rating } from "@ventionMachineCloudTest/models"

import { RatingServiceModule } from "../../services/rating/rating-service.module"
import { RatingService } from "../../services/rating/rating.service"
import { RatingController } from "./rating.controller"

@Module({
  imports: [TypeOrmModule.forFeature([Rating]), RatingServiceModule],
  providers: [RatingService],
  exports: [RatingService],
  controllers: [RatingController],
})
export class RatingModule {}
