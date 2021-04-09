import { IsNumber, IsString, IsDate } from 'class-validator';

export class AccountDto {
  @IsNumber()
  id: number;
  @IsNumber()
  customerId: number;
  @IsNumber()
  balance: number;
  @IsDate()
  dateCreated: Date;
}
