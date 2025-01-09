import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { Category } from './category.entity';

@Entity()
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column()
  description: string

  @ManyToOne(type => ArticleEntity, article => article.comments)
  article: ArticleEntity;

  @ManyToOne(type => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}