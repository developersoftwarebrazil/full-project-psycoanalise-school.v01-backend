export class Enrollment {
  constructor(
    public readonly id: string,
    public studentId: string,
    public courseId: string,
    public status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' = 'ACTIVE',
    public createdAt: Date = new Date(),
  ) {}

  static create(studentId: string, courseId: string): Enrollment {
    const id = crypto.randomUUID();
    return new Enrollment(id, studentId, courseId);
  }
}
git