import { IsNumber, IsString, IsDate } from 'class-validator';

export class CustomerDto {
  @IsNumber()
  id: number;

  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsDate()
  dateCreated: Date;
}
