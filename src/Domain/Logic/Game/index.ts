import { Point } from "../../../shared/types/point";
import { FruitEntity } from "../../Entities/Fruit";
import { PlayerEntity } from "../../Entities/Player";
import { QuadTree } from "./QuadTree";
import { randomUUID } from "node:crypto"



type Command = { type: string, playerID: string, playerX?: number, playerY?: number } | { type: string, fruitID: string, fruitX?: number, fruitY?: number }
type ObserverFunction = (command: Command) => void


export class Game {
    public players: { [playerID: string]: PlayerEntity };
    public fruits: { [fruitID: string]: FruitEntity };
    private observers: ObserverFunction[];
    private quadtree: QuadTree;

    constructor(public screen: { width: number, height: number }) {
        this.observers = []
        this.players = {}
        this.fruits = {}
        this.quadtree = new QuadTree(1, { x: 0, y: 0, ...screen })
    }
    notifyAll(command: Command) {
        for (let observerFunction of this.observers) {
            observerFunction(command)
        }
    }

    addPlayer(id: string): player {
        let position: Point = { x: Math.floor(Math.random() * this.screen.width), y: Math.floor(Math.random() * this.screen.height) }
        let player = PlayerEntity.create({ position }, id)
        this.players[id] = player
        this.quadtree.addPlayer(position, id)
        this.notifyAll({
            type: 'add-player',
            playerID: id,
            playerX: position.x,
            playerY: position.y
        })
        return player
    }
    removePlayer(id: string) {
        delete this.players[id]
        this.notifyAll({
            type: 'remove-player',
            playerID: id,
        })
    }
    addFruit() {
        let id = randomUUID()
        let position: Point = { x: Math.floor(Math.random() * this.screen.width), y: Math.floor(Math.random() * this.screen.height) }
        let fruit = FruitEntity.create({ position }, id)
        this.fruits[id] = fruit
        this.quadtree.addFruit(position, id)
        this.notifyAll({
            type: 'add-fruit',
            fruitID: id,
            fruitX: position.x,
            fruitY: position.y
        })
        return fruit
    }
    removeFruit(id: string) {
        delete this.fruits[id]
        this.notifyAll({
            type: 'remove-fruit',
            fruitID: id,
        })
    }
    movePlayer(command) {


    }
    updatePlayerPosition(playerID: string, point: Point) {
        let player = this.quadtree.getPlayerByID(playerID)
        player.x = point.x
        player.y = point.y
        return this.players[playerID].updatePosition(point)

    }


}