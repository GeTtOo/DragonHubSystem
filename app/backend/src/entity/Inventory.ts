import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { ModelPlayers } from "./Players"

@Entity()
export class ModelInventory {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ nullable: false })
	@ManyToOne(() => ModelPlayers, (players) => players.id)
	@JoinColumn({ name: "player", referencedColumnName: "id" })
	player!: ModelPlayers

	@Column({ type: "simple-json", nullable: false })
	item!: { name: string, description: string, timeStart: number, timeEnd: number, meta: object }

}