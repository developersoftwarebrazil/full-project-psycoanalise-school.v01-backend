import { Student } from '../entities/student.entity';

export abstract class StudentRepository {
  abstract create(student: Student): Promise<Student>;
  abstract findById(id: string): Promise<Student | null>;
  abstract findByEmail(email: string): Promise<Student | null>;
  abstract findAll(): Promise<Student[]>;
}
