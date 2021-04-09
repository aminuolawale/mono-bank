import { Injectable } from '@nestjs/common';
import { AccountDto } from './dto/account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from './entity/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private repository: Repository<AccountEntity>,
  ) {}
  create(account: AccountDto): Promise<AccountDto> {
    return this.repository.save(account);
  }

  findOne(id: number): Promise<AccountDto> {
    return this.repository.findOne({ id: id });
  }
  findAll(customerId: string): Promise<AccountDto[]> {
    return this.repository.find({ customerId: parseInt(customerId) });
  }
}
