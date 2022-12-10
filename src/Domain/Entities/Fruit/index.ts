import { Entity } from "../../../shared/interfaces/Entities/Entity";
import { Point } from "../../../shared/types/point";

interface FruitProps {
    position: Point
}

export class FruitEntity extends Entity<FruitProps>{
    private constructor(props: FruitProps, id?: string) {
        super(props, id)
    }
    static create(props: FruitProps, id?: string): FruitEntity {
        return new FruitEntity(props, id)
    }
    get x(): number {
        return this.props.position.x
    }
    get y(): number {
        return this.props.position.y
    }
    updatePosition(position: Point) {
        this.props.position = position
    }
}