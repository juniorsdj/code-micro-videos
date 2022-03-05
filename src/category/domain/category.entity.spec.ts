import { omit } from "lodash";
import { Category } from "./category.entity";
import { UniqueEntityId } from "../../@seedwork/domain/unique-entity-id.vo";

describe("Category Tests", () => {
  describe("constructor of category", () => {
    it("must create a new category when pass only name property", () => {
      const sut = new Category({
        name: "Movie",
      });

      expect(omit(sut.props, "created_at")).toStrictEqual({
        name: "Movie",
        description: null,
        is_active: true,
      });

      expect(sut.props.created_at).toBeInstanceOf(Date);
    });

    it("must create a new category when don't receive id param", () => {
      const sut = new Category({
        name: "Movie",
      });

      expect(sut.id).not.toBeNull();
      expect(sut.id).toBeInstanceOf(UniqueEntityId);
    });
    it("must create a new category when receive id param as null", () => {
      const sut = new Category(
        {
          name: "Movie",
        },
        null
      );

      expect(sut.id).not.toBeNull();
      expect(sut.id).toBeInstanceOf(UniqueEntityId);
    });
    it("must create a new category when receive id param as undefined", () => {
      const sut = new Category(
        {
          name: "Movie",
        },
        undefined
      );

      expect(sut.id).not.toBeNull();
      expect(sut.id).toBeInstanceOf(UniqueEntityId);
    });
    it("must create a new category when receive id valid", () => {
      const sut = new Category(
        {
          name: "Movie",
        },
        new UniqueEntityId()
      );

      expect(sut.id).not.toBeNull();
      expect(sut.id).toBeInstanceOf(UniqueEntityId);
    });
    it("must throw a exception when create a category with invalid id", () => {
      expect(() => {
        const sut = new Category(
          {
            name: "Movie",
          },
          new UniqueEntityId("INVALID ID")
        );
      }).toThrowError("ID is invalid");
    });
    it("must create a new category when pass name, description, active and created_at", () => {
      const created_at = new Date();
      const sut = new Category({
        name: "Movie",
        description: "some description",
        is_active: true,
        created_at,
      });

      expect(sut.props).toStrictEqual({
        name: "Movie",
        description: "some description",
        is_active: true,
        created_at,
      });
    });
    it("must create a new category when pass name and description", () => {
      const sut = new Category({
        name: "Movie",
        description: "some description",
      });

      expect(sut.props).toMatchObject({
        name: "Movie",
        description: "some description",
        is_active: true,
      });
    });
    it("must create a new category when pass name and is_active", () => {
      const sut = new Category({
        name: "Movie",
        is_active: false,
      });

      expect(sut.props).toMatchObject({
        name: "Movie",
        is_active: false,
      });
    });
  });
  describe("getters and setters", () => {
    let created_at: Date;
    let category: Category;
    beforeEach(() => {
      created_at = new Date();
      category = new Category({
        name: "Movie",
        description: "some description",
        is_active: true,
        created_at,
      });
    });
    it("should return name when use get name", () => {
      expect(category.name).toBe("Movie");
    });
    it("should return description when use get description", () => {
      expect(category.description).toBe("some description");
    });
    it("should change description when use set description", () => {
      category.description = "other description";
      expect(category.description).toBe("other description");
    });
    it("should return is_active when use get is_active", () => {
      expect(category.is_active).toBeTruthy();
    });
    it("should change is_active when use set is_active", () => {
      category.is_active = false;
      expect(category.is_active).toBeFalsy();
    });
    it("should return created_at when use get created_at", () => {
      expect(category.created_at).toBe(created_at);
    });
  });
});
