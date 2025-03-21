import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateStudentUseCase } from '../application/create-student.use-case';
import { ListStudentsUseCase } from '../application/list-students.use-case';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly createStudentUseCase: CreateStudentUseCase,
    private readonly listStudentsUseCase: ListStudentsUseCase,
  ) {}

  @Post()
  async create(@Body() body: { name: string; email: string }) {
    return this.createStudentUseCase.execute(body.name, body.email);
  }

  @Get()
  async findAll() {
    return this.listStudentsUseCase.execute();
  }
}
