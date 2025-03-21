import { Injectable } from '@nestjs/common';
import { StudentRepository } from '../domain/repositories/student.repository';
import { Student } from '../domain/entities/student.entity';

@Injectable()
export class CreateStudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async execute(name: string, email: string): Promise<Student> {
    const student = new Student(crypto.randomUUID(), name, email);
    return this.studentRepository.create(student);
  }
}
