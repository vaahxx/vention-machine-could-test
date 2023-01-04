import { Module } from "@nestjs/common"
import { ServeStaticModule } from "@nestjs/serve-static"

import { configuration } from "../config/configuration"
import { HealthModule } from "../endpoints/health/health.module"
import { ProductModule } from "../endpoints/product/product.module"
import { RatingModule } from "../endpoints/rating/rating.module"
import { TodosModule } from "../endpoints/todos/todos.module"
import { getRootModuleImports } from "../utils/utils"

@Module({
  imports: [
    ...getRootModuleImports(configuration),
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/assets`,
      exclude: ["/api*"],
    }),
    HealthModule,
    TodosModule,
    ProductModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
