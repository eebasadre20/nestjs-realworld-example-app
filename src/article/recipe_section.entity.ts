import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Recipe } from './recipe.entity'
import { Section } from './section.entity'

@Entity()
export class RecipeSection {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  recipe_id: number

  @Column()
  section_id: number

  @ManyToOne(() => Recipe, (recipe) => recipe.recipeSections)
  recipe: Recipe

  @ManyToOne(() => Section, (section) => section.recipeSections)
  section: Section
}