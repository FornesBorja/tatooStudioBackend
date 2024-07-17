import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { service } from "./service"; 
import { user } from "./user";      

@Entity("appointment")
export class appointment extends BaseEntity {
    
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

    @ManyToOne(() => service, (service: { appointments: any; }) => service.appointments)
    @JoinColumn({ name: "service_id" })
    service!: service;

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        if (!this.appointmentDate) {
            throw new Error("Appointment date is required");
        }
        
        const currentDate = new Date();
        if (this.appointmentDate < currentDate) {
            throw new Error("Appointment date cannot be in the past");
        }
        
        const client = await user.findOne({ where: { id: this.clientId } });
        if (!client) {
            throw new Error("Client not found");
        }

        const artist = await user.findOne({ where: { id: this.artistId } });
        
        if (!artist) {
            throw new Error("Artist not found");
        }

        if (![Number(process.env.SUPER_ADMIN),Number(process.env.ARTIST)].includes(artist.roleId)) {
            throw new Error("Artist must have artist or super_admin role");
        }
        const existingAppointment = await appointment.findOne({
            where: { artistId: this.artistId, appointmentDate: this.appointmentDate }
        });

        if (existingAppointment) {
            throw new Error("The artist is already booked for the selected date and time");
        }
    }
}
