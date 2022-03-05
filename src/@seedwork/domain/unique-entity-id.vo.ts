import { InvalidIdError } from "./../errors/invalid-id.error";
import { v4 as uuidV4, validate as validateUUID } from "uuid";


export class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuidV4();

    this.validate(this.id);
  }

  private validate(value: string) {
    const isValid = validateUUID(value);
    if (!isValid) {
      throw new InvalidIdError();
    }
  }
}
