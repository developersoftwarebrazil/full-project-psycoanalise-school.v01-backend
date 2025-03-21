import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { EnrollmentRepository } from '../../domain/repositories/enrollment.repository';
import { Enrollment } from '../../domain/entities/enrollment.entity';


@Injectable()
export class EnrollmentPrismaRepository implements EnrollmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(enrollment: Enrollment): Promise<Enrollment> {
    const createdEnrollment = await this.prisma.enrollment.create({
      data: {
        id: enrollment.id,
        studentId: enrollment.studentId,
        courseId: enrollment.courseId,
        status: enrollment.status,
      },
    });
    return new Enrollment(
      createdEnrollment.id,
      createdEnrollment.studentId,
      createdEnrollment.courseId,
      createdEnrollment.status,
    );
  }

  async findByStudentAndCourse(
    studentId: string,
    courseId: string,
  ): Promise<Enrollment | null> {
    const enrollment = await this.prisma.enrollment.findFirst({
      where: { studentId, courseId },
    });
    return enrollment
      ? new Enrollment(
          enrollment.id,
          enrollment.studentId,
          enrollment.courseId,
          enrollment.status,
        )
      : null;
  }

  async findAll(): Promise<Enrollment[]> {
    const enrollments = await this.prisma.enrollment.findMany();
    return enrollments.map(
      (enrollment) =>
        new Enrollment(
          enrollment.id,
          enrollment.studentId,
          enrollment.courseId,
          enrollment.status,
        ),
    );
  }
}
