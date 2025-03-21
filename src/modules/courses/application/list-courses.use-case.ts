import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/entities/course.entity';

@Injectable()
export class ListCoursesUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(): Promise<Course[]> {
    return this.courseRepository.findAll();
  }
}
