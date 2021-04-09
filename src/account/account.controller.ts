import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AccountDto } from './dto/account.dto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private service: AccountService) {}
  @Post()
  create(@Body() account: AccountDto): Promise<AccountDto> {
    return this.service.create(account);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AccountDto> {
    return this.service.findOne(id);
  }
  @Get()
  findAll(@Query() query: string): Promise<AccountDto[]> {
    return this.service.findAll(query['customerId']);
  }
}
