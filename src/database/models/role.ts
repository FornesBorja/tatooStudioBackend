import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { user } from "./user"

@Entity("role")
export class role extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name'})
    name!: string

    @OneToMany(() => user, (user) => user.role)
    users!: user[]
}