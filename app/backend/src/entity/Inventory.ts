import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Players } from "./Players"

@Entity()
export class Inventory {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ nullable: false })
	@ManyToOne(() => Players, (players) => players.id)
	@JoinColumn({ name: "player", referencedColumnName: "id" })
	player!: Players

	@Column({ type: "simple-json", nullable: false })
	item!: { name: string, description: string, timeStart: number, timeEnd: number, meta: object }

}