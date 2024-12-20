import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number
  @Column('varchar', { length: 255 })
  name: string
  @Column()
  created_at: Date
  @Column()
  updated_at: Date
}