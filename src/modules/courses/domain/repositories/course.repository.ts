// export abstract class CourseRepository {
//   abstract create(course: Course): Promise<Course>;
//   abstract findAll(): Promise<Course[]>;
//   abstract findById(id: string): Promise<Course | null>;
//   abstract update(id: string, course: Partial<Course>): Promise<Course>;
//   abstract delete(id: string): Promise<void>;
// }
import { Course } from '../entities/course.entity';

export abstract class CourseRepository {
  abstract create(course: Course): Promise<Course>;
  abstract findById(id: string): Promise<Course | null>;
  abstract findAll(): Promise<Course[]>;
  abstract update(id: string, course: Partial<Course>): Promise<Course>;
  abstract delete(id: string): Promise<void>;
}
