import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongooseConfig from './mongoose.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => mongooseConfig,
    }),
    CatsModule,
  ],
})
export class AppModule {}
