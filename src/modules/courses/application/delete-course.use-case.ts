import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../domain/repositories/course.repository';

@Injectable()
export class DeleteCourseUseCase {
  constructor(private readonly courseRepository: CourseRepository) {}

  async execute(id: string): Promise<void> {
    const existingCourse = await this.courseRepository.findById(id);
    if (!existingCourse) {
      throw new Error('Curso não encontrado.');
    }

    return this.courseRepository.delete(id);
  }
}
