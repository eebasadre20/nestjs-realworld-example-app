import { IsEmail } from 'class-validator';
import * as argon2 from 'argon2';
import { RecipeEntity } from '../article/recipe.entity';
import { PasswordResetRequestEntity } from '../password-reset/password-reset-request.entity';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  is_logged_in: boolean; // Added new column to track login status

  @Column()
  @IsEmail()
  email: string;

  @OneToMany(type => RecipeEntity, recipe => recipe.user)
  recipes: RecipeEntity[];

  @OneToMany(type => PasswordResetRequestEntity, passwordResetRequest => passwordResetRequest.user)
  passwordResetRequests: PasswordResetRequestEntity[];

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @ManyToMany(type => ArticleEntity)
  @JoinTable()
  favorites: ArticleEntity[];

  @OneToMany(type => ArticleEntity, article => article.author)
  articles: ArticleEntity[];
}