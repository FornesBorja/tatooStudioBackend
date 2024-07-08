import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('user')
export class user extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:'first_name'})
    firstName!: string

    @Column({name:'last_name'})
    lastName!: string

    @Column({name:'email'})
    email!:string

    @Column({name:'password_hash'})
    passwordHash!:string

    @Column({name:'role_id'})
    roleId!:number

    
}
