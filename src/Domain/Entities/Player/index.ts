import { Entity } from "~/shared/interfaces/Entities/Entity";
import { Point } from "~/shared/types/point";

interface PlayerProps {
    position: Point
}

export class PlayerEntity extends Entity<PlayerProps>{
    private constructor(props: PlayerProps, id?: string) {
        super(props, id)
    }
    static create(props: PlayerProps, id?: string): PlayerEntity {
        return new PlayerEntity(props, id)
    }
    get x(): number {
        return this.props.position.x
    }
    get y(): number {
        return this.props.position.y
    }
    updatePosition(position: Point){
        this.props.position = position
    }
}