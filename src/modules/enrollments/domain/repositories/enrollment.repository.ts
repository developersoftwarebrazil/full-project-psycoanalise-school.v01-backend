import { Enrollment } from '../entities/enrollment.entity';

export abstract class EnrollmentRepository {
  abstract create(enrollment: Enrollment): Promise<Enrollment>;
  abstract findByStudentAndCourse(
    studentId: string,
    courseId: string,
  ): Promise<Enrollment | null>;
  abstract findAll(): Promise<Enrollment[]>;
}
