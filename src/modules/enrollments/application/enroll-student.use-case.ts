import { Injectable } from '@nestjs/common';
import { EnrollmentRepository } from '../domain/repositories/enrollment.repository';
import { Enrollment } from '../domain/entities/enrollment.entity';

@Injectable()
export class EnrollStudentUseCase {
  constructor(private readonly enrollmentRepository: EnrollmentRepository) {}

  async execute(studentId: string, courseId: string): Promise<Enrollment> {
    // Verifica se o aluno já está matriculado no curso
    const existingEnrollment =
      await this.enrollmentRepository.findByStudentAndCourse(
        studentId,
        courseId,
      );
    if (existingEnrollment) {
      throw new Error('O aluno já está matriculado neste curso.');
    }

    const enrollment = new Enrollment(
      crypto.randomUUID(),
      studentId,
      courseId,
      'ACTIVE',
    );
    return this.enrollmentRepository.create(enrollment);
  }
}
