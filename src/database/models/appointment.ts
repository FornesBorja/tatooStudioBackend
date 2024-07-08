import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { service } from "./service";

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
    

    @ManyToOne(() => service, (service) => service.appointments)
    @JoinColumn({name: "service_id"})
    service!: service
}