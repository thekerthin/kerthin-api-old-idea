import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './base-entity';

@Entity('blog')
export class Blog extends BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose()
  @Column()
  title: string;

  @Expose()
  @Column({ nullable: true })
  description?: string;

  @Expose()
  @Column()
  content: string;

  @Expose()
  @Column({ type: 'uuid' })
  owner: string;
}
