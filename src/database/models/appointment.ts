import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { service } from "./service";
import { user } from "./user";

@Entity("appointment")
export class Appointment extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "appointment_date" })
    appointmentDate!: Date;
    
    @Column({ name: 'client_id' })
    clientId!: number;

    @Column({ name: 'artist_id' })
    artistId!: number;

    @Column({ name: 'service_id' })
    serviceId!: number;
    
    @ManyToOne(() => user, (user: { clientAppointments: any; }) => user.clientAppointments)
    @JoinColumn({ name: "client_id" })
    client!: user;

    @ManyToOne(() => user, (user: { artistAppointments: any; }) => user.artistAppointments)
    @JoinColumn({ name: "artist_id" })
    artist!: user;

    @ManyToOne(() =>service, (service: { appointments: any; }) => service.appointments)
    @JoinColumn({ name: "service_id" })
    service!: service;
}
