import { UniqueEntityId } from "../../@seedwork/domain/unique-entity-id.vo";

export class Category {
  id: UniqueEntityId;
  constructor(
    public readonly props: {
      name: string;
      description?: string;
      is_active?: boolean;
      created_at?: Date;
    },
    id?: UniqueEntityId
  ) {
    this.id = id || new UniqueEntityId();
    this.description = this.props.description;
    this.is_active = this.props.is_active;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  set description(description: string) {
    this.props.description = description ?? null;
  }
  set is_active(is_active: boolean) {
    this.props.is_active = is_active ?? true;
  }

  get description() {
    return this.props.description;
  }
  get is_active() {
    return this.props.is_active;
  }
  get created_at() {
    return this.props.created_at;
  }
}
