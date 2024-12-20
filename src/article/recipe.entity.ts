import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Recipe {
  @Column('text')
  title: string

  @Column('text')
  description: string

  @ManyToOne(() => User, user => user.recipes)
  user: User
}