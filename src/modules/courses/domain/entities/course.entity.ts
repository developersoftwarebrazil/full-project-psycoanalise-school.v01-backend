export class Course {
  constructor(
    public readonly id: string,
    public title: string,
    public description?: string | null,
    public createdAt: Date = new Date(),
  ) {}

  static create(title: string, description?: string | null): Course {
    const id = crypto.randomUUID();
    return new Course(id, title, description);
  }
}
