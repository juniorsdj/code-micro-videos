import { InvalidIdError } from "./../errors/invalid-id.error";
import { UniqueEntityId } from "./unique-entity-id.vo";

describe("uniqueEntityId Unit Test", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
  it("should throw error when send a invalid id", () => {
    const fn = () => new UniqueEntityId("aa");

    expect(fn).toThrow(new InvalidIdError());
    expect(validateSpy).toBeCalledTimes(1);
  });

  it("should create an uniqueEntityId value object when pass a valid id", () => {
    const id = "eb97ae44-c265-47b8-bf0f-a075c615e2b5";
    const vo = new UniqueEntityId(id);

    expect(vo.id).toBe(id);
    expect(validateSpy).toBeCalledTimes(1);
  });
});
