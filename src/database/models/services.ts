import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('service')
export class services extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: Number;

  @Column({ name: "service_name" })
  serviceName!: string;

  @Column({ name: "description" })
  desciption!: string;
}
