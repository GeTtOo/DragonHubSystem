import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { ModelPlayers } from "./Players"

@Entity()
export class ModelGameServer {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: "varchar", length: 15, default: null })
	ip!: string

	@Column({ type: "smallint", default: 27015, unsigned: true })
	port!: number

	@Column({ type: "varchar", length: 256, unique: true, default: null })
	key!: string

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	lastAuth!: Date

	@Column({ nullable: true })
	@ManyToOne(() => ModelPlayers, (players) => players.id)
	@JoinColumn({ name: "userWhoAdd", referencedColumnName: "id" })
	userWhoAdd!: ModelPlayers
	
}