import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { StudentRepository } from '../../domain/repositories/student.repository';
import { Student } from '../../domain/entities/student.entity';

@Injectable()
export class StudentPrismaRepository implements StudentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(student: Student): Promise<Student> {
    const createdStudent = await this.prisma.student.create({
      data: {
        id: student.id,
        name: student.name,
        email: student.email,
      },
    });
    return new Student(
      createdStudent.id,
      createdStudent.name,
      createdStudent.email,
    );
  }

  async findById(id: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({ where: { id } });
    return student
      ? new Student(student.id, student.name, student.email)
      : null;
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({ where: { email } });
    return student
      ? new Student(student.id, student.name, student.email)
      : null;
  }

  async findAll(): Promise<Student[]> {
    const students = await this.prisma.student.findMany();
    return students.map(
      (student) => new Student(student.id, student.name, student.email),
    );
  }
}
