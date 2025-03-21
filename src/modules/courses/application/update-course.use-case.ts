import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../domain/repositories/course.repository';
import { Course } from '../domain/entities/course.entity';

@Injectable()
export class UpdateCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(
    id: string,
    title?: string,
    description?: string,
  ): Promise<Course> {
    const existingCourse = await this.courseRepository.findById(id);
    if (!existingCourse) {
      throw new Error('Curso não encontrado.');
    }

    if (title) existingCourse.title = title;
    if (description) existingCourse.description = description;

    return this.courseRepository.update(id, existingCourse);
  }
}
