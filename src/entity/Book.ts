import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("book")
export class Book {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  title: string;

  @Column({ name: "publish_date" })
  publishDate: Date;
}
