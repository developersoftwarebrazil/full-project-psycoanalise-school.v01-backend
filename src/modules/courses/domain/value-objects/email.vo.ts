export class Email {
  private readonly _value: string;
  constructor(value: string) {
    this._value = value;
    this.validate();
  }

  private validate() {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(this._value)) {
      throw new Error('Invalid email address');
    }
  }

  public get value() {
    return this._value;
  }
}
