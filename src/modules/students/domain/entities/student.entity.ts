export class Student {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public createdAt: Date = new Date(),
  ) {}

  static create(name: string, email: string): Student {
    const id = crypto.randomUUID();
    return new Student(id, name, email);
  }
}
