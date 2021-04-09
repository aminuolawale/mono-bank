import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from '../../customer/entity/customer.entity';
@Entity()
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  customerId: number;
  @Column({ nullable: false, default: 0 })
  balance: number;
  @Column({ default: new Date() })
  dateCreated: Date;
}
