import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./appointment";

@Entity('service')
export class service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: Number;

  @Column({ name: "service_name" })
  serviceName!: string;

  @Column({ name: "description" })
  desciption!: string;

  @OneToMany(() => Appointment, (appointment) => appointment.service)
    appointments!: Appointment[];
}
