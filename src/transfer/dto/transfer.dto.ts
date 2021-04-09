import { IsNumber, IsString, IsDate } from 'class-validator';

export class TransferDto {
  @IsNumber()
  id: number;
  @IsNumber()
  fromAccountId: number;
  @IsNumber()
  toAccountId: number;
  @IsNumber()
  amount: number;
  @IsDate()
  dateCreated: Date;
}

export class EntryDto {
  @IsNumber()
  id: number;
  @IsNumber()
  accountId: number;
  @IsNumber()
  amount: number;
  @IsDate()
  dateCreated: Date;
}
