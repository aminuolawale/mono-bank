import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TransferEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  fromAccountId: number;
  @Column({ nullable: false })
  toAccountId: number;
  @Column({ nullable: false })
  amount: number;
  @Column({ default: new Date() })
  dateCreated: Date;
}
