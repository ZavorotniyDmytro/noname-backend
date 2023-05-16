import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';
import { Model } from './model.entity';

@Entity()
@Unique(['name'])
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Model, model => model.brand)
  models: Model[];
}