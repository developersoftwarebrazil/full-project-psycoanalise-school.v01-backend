export class Course {
  constructor(
    public readonly id: string,
    public title: string,
    public description?: string,
    public createdAt: Date = new Date(),
  ) {}

  static create(title: string, description?: string): Course {
    const id = crypto.randomUUID();
    return new Course(id, title, description);
  }
}
