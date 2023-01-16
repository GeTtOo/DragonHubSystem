import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Admins } from "./Admins"
import { AdminsGroups } from "./AdminsGroups"

@Entity()
export class Players {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: "int", nullable: false })
	steam!: number

	@Column({ type: "bigint", default: null })
	discord!: number

	@Column({ type: "int", default: null })
	ip!: number

	@Column({ type: "int", default: 0 })
	time!: number

	@Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
	lastconnect!: number

	@Column({ type: "int", default: 0 })
	balance!: number

	@Column({ nullable: true })
	@ManyToOne(() => Admins, (admin) => admin.id)
	@JoinColumn({ name: "admin", referencedColumnName: "id" })
	admin!: Admins

	@Column({ nullable: true })
	@ManyToOne(() => AdminsGroups, (group) => group.id)
	@JoinColumn({ name: "group", referencedColumnName: "id" })
	group!: AdminsGroups

}
