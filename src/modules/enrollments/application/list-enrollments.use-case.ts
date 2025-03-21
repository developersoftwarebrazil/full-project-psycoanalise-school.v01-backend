import { Injectable } from '@nestjs/common';
import { EnrollmentRepository } from '../domain/repositories/enrollment.repository';
import { Enrollment } from '../domain/entities/enrollment.entity';

@Injectable()
export class ListEnrollmentsUseCase {
  constructor(private readonly enrollmentRepository: EnrollmentRepository) {}

  async execute(): Promise<Enrollment[]> {
    return this.enrollmentRepository.findAll();
  }

  async findByStudent(studentId: string): Promise<Enrollment[]> {
    return this.enrollmentRepository.findByStudent(studentId);
  }
}
