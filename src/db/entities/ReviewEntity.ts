import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'review' })
class ReviewEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({
    name: 'first_name',
    type: 'varchar',
    nullable: false,
  })
    firstName!: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    nullable: false,
  })
    lastName!: string;

  @Column({
    type: 'varchar',
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
export default ReviewEntity;
