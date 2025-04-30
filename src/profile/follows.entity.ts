import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Sample } from './sample.entity';

@Entity('follows')
export class FollowsEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  followerId: number;

  @Column()
  followingId: number;

  @ManyToOne(() => Sample, sample => sample.id)
  @Column()
  sampleId: number;

}