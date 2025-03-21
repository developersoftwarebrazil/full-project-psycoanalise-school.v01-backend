import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { EnrollStudentUseCase } from '../application/enroll-student.use-case';
import { ListEnrollmentsUseCase } from '../application/list-enrollments.use-case';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(
    private readonly enrollStudentUseCase: EnrollStudentUseCase,
    private readonly listEnrollmentsUseCase: ListEnrollmentsUseCase,
  ) {}

  @Post()
  async enroll(@Body() body: { studentId: string; courseId: string }) {
    return this.enrollStudentUseCase.execute(body.studentId, body.courseId);
  }

  @Get()
  async findAll() {
    return this.listEnrollmentsUseCase.execute();
  }

  @Get(':id')
  async findByStudent(@Param('id') studentId: string) {
    return this.listEnrollmentsUseCase.findByStudent(studentId);
  }
}
