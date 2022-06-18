export default class ComputerController {
  constructor(public email: { a: string }) {}

  run(a, b) {
    return this.email.a;
  }
}
