export class InvalidIdError extends Error {
  constructor(message?: string) {
    super(message || "ID is invalid");
    this.name = "InvalidIdError"
  }
}
