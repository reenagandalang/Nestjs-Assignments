import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller';

@Module({
  imports: [],
  controllers: [AssignmentController],
  providers: [],
})
export class AppModule {}
