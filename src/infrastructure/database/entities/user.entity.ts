import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity('user')
export class User {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  surname: string;

  @Expose()
  @Column({ name: 'date_birth' })
  dateBirth: Date;

  @Expose()
  @Column({ unique: true })
  username: string;

  @Expose()
  @Column({ unique: true })
  email: string;

  @Expose()
  @Column({ nullable: true })
  phone?: string;

  @Expose()
  @Column({ nullable: true })
  cellphone?: string;
}
