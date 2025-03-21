import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateCourseUseCase } from '../application/create-course.use-case';
import { ListCoursesUseCase } from '../application/list-courses.use-case';
import { UpdateCourseUseCase } from '../application/update-course.use-case';
import { DeleteCourseUseCase } from '../application/delete-course.use-case';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly createCourseUseCase: CreateCourseUseCase,
    private readonly listCoursesUseCase: ListCoursesUseCase,
    private readonly updateCourseUseCase: UpdateCourseUseCase,
    private readonly deleteCourseUseCase: DeleteCourseUseCase,
  ) {}

  @Post()
  async create(@Body() body: { name: string; description: string }) {
    return this.createCourseUseCase.execute(body.name, body.description);
  }

  @Get()
  async findAll() {
    return this.listCoursesUseCase.execute();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: { name?: string; description?: string },
  ) {
    return this.updateCourseUseCase.execute(id, body.name, body.description);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.deleteCourseUseCase.execute(id);
  }
}
