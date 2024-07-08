import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { service } from "./service";
import { user } from "./user";

@Entity("appointment")
export class appointment extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "appointment_date"})
    appointmentDate!: Date
    
    @Column({ name: 'user_id'})
    userId!: number

    @Column({name: 'service_id'})
    serviceId!: number
    
    @ManyToOne(() => user,(user) => user.appointments)
    @JoinColumn ({ name: "user_id"})
    user!: user;

    @ManyToOne(() => service, (service) => service.appointments)
    @JoinColumn({name: "service_id"})
    service!: service
}