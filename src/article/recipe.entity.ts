import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { UserEntity } from './user.entity'

@Entity()
export class Recipe {
  @Column('text')
  title: string

  @Column('text')
  description: string

  @ManyToOne(() => UserEntity, user => user.recipes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  user: UserEntity

  @Column({ type: 'int', name: 'user_id' })
  userId: number
}