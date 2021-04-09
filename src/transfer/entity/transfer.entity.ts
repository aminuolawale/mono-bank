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

@Entity()
export class EntryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  accountId: number;
  @Column({ nullable: false })
  amount: number;
  @Column({ nullable: false, default: new Date() })
  dateCreated: Date;
}
