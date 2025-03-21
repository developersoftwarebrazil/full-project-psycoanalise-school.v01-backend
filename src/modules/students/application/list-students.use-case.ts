import { Injectable } from '@nestjs/common';
import { StudentRepository } from '../domain/repositories/student.repository';
import { Student } from '../domain/entities/student.entity';

@Injectable()
export class ListStudentsUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }
}
