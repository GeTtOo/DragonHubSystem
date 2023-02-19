import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { ModelPlayers } from "./Players"

@Entity()
export class ModelMuteList {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ nullable: false })
	@ManyToOne(() => ModelPlayers, (players) => players.id)
	@JoinColumn({ name: "player", referencedColumnName: "id" })
	player!: ModelPlayers

	@Column({ nullable: false })
	@ManyToOne(() => ModelPlayers, (players) => players.id)
	@JoinColumn({ name: "admin", referencedColumnName: "id" })
	admin!: ModelPlayers

	@Column({ type: "tinyint", default: 0 })
	type!: number

	@Column({ type: "varchar", length: 256, default: null })
	reason!: string

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	start!: Date

	@Column({ type: "timestamp", default: null })
	end!: Date

	@Column({ nullable: true })
	@ManyToOne(() => ModelPlayers, (players) => players.id)
	@JoinColumn({ name: "removedBy", referencedColumnName: "id" })
	removedBy!: ModelPlayers

	@Column({ type: "timestamp", default: null })
	removedDate!: Date

	@Column({ type: "varchar", length: 256, default: null })
	removedReason!: string
	
}