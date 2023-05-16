import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Model } from './model.entity';

@Entity()
@Unique(['serialNumber'])
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serialNumber: string;

  @ManyToOne(() => Model)
  model: Model;
}