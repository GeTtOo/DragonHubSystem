import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Admins {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: "mediumint", default: 0, unsigned: true })
	flags!: number
	
	@Column({ type: "tinyint", default: 0, unsigned: true })
	immunity!: number

}
