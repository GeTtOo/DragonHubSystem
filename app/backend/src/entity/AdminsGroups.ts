import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

interface IOverrides {
	key: string
	value: boolean
}

@Entity()
export class ModelAdminsGroups {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({ type: "varchar", length: 256, nullable: false })
	name!: string

	@Column({ type: "mediumint", default: 0, unsigned: true })
	flags!: number

	@Column({ type: "tinyint", default: 0, unsigned: true })
	immunity!: number

	@Column({ type: "simple-array", default: null })
	overrides!: IOverrides[]

}
