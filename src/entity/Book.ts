import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  title: string;

  @Column()
  publish_date: Date;
}
