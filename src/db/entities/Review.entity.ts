import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'Review' })
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({
    type: 'string',
    nullable: false,
  })
    name!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
    lastname!: string;

  @Column({
    type: 'string',
    nullable: false,
  })
    notes!: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
    rating!: number;

  @Column({
    type: 'boolean',
    nullable: false,
  })
    agree!: boolean;
}
