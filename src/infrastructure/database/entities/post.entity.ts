import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './base-entity';

@Entity('post')
export class Post extends BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Expose()
  @Column()
  content: string;

  @Expose()
  @Column({ type: 'uuid' })
  owner: string;

  @Expose()
  @Column({ name: 'associated_to', type: 'uuid' })
  associatedTo: string;
}
