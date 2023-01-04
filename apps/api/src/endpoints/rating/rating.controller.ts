import { Controller } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { Crud, CrudController } from "@nestjsx/crud"
import { Rating } from "@ventionMachineCloudTest/models"

import { RatingService } from "../../services/rating/rating.service"

@ApiTags("ratings")
@Controller("ratings")
@Crud({
  model: { type: Rating },
  routes: {
    exclude: ["createManyBase", "getOneBase", "replaceOneBase"],
    getManyBase: { decorators: [ApiOperation({ operationId: "getManyRatings", summary: "Retrieve multiple Ratings" })] },
    createOneBase: { decorators: [ApiOperation({ operationId: "createOneRating", summary: "Create one Rating" })] },
    updateOneBase: { decorators: [ApiOperation({ operationId: "updateOneRating", summary: "Update a single Rating" })] },
    deleteOneBase: { decorators: [ApiOperation({ operationId: "deleteOneRating", summary: "Delete a single Rating" })] },
  },
})
export class RatingController implements CrudController<Rating> {
  constructor(public service: RatingService) {}
}
