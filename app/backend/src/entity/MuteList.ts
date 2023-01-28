import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Players } from "./Players"

@Entity()
export class MuteList {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ nullable: false })
	@ManyToOne(() => Players, (players) => players.id)
	@JoinColumn({ name: "player", referencedColumnName: "id" })
	player!: Players

	@Column({ nullable: false })
	@ManyToOne(() => Players, (players) => players.id)
	@JoinColumn({ name: "admin", referencedColumnName: "id" })
	admin!: Players

	@Column({ type: "tinyint", default: 0 })
	type!: number

	@Column({ type: "varchar", length: 256, default: null })
	reason!: string

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	start!: Date

	@Column({ type: "timestamp", default: null })
	end!: Date

	@Column({ nullable: true })
	@ManyToOne(() => Players, (players) => players.id)
	@JoinColumn({ name: "removedBy", referencedColumnName: "id" })
	removedBy!: Players

	@Column({ type: "timestamp", default: null })
	removedDate!: Date

	@Column({ type: "varchar", length: 256, default: null })
	removedReason!: string
	
}