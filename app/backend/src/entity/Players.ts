import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { ModelAdmins } from "./Admins"
import { ModelAdminsGroups } from "./AdminsGroups"

@Entity()
export class ModelPlayers {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: "int", unique: true, nullable: false })
	steam!: number

	@Column({ type: "bigint", default: null })
	discord!: number

	@Column({ type: "int", default: null })
	ip!: number

	@Column({ type: "int", default: 0 })
	time!: number

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	lastconnect!: Date

	@Column({ type: "int", default: 0 })
	balance!: number

	@Column({ nullable: true })
	@ManyToOne(() => ModelAdmins, (admin) => admin.id)
	@JoinColumn({ name: "admin", referencedColumnName: "id" })
	admin!: ModelAdmins

	@Column({ nullable: true })
	@ManyToOne(() => ModelAdminsGroups, (group) => group.id)
	@JoinColumn({ name: "group", referencedColumnName: "id" })
	group!: ModelAdminsGroups

}
