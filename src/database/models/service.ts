import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { appointment } from "./appointment";

@Entity('service')
export class service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: Number;

  @Column({ name: "service_name" })
  serviceName!: string;

  @Column({ name: "description" })
  description!: string;

  @OneToMany(() => appointment, (appointment) => appointment.service)
    appointments!: appointment[];
}
