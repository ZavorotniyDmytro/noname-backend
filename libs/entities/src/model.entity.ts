import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne } from 'typeorm';
import { Brand } from './brand.entity';

@Entity()
@Unique(['name'])
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Brand, brand => brand.models)
  brand: Brand;

  @Column({ type: 'float', unsigned: true, precision: 5, scale: 2 })
  screenDiagonal: number;
}