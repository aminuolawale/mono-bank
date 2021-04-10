import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AccountDto } from './dto/account.dto';
import { AccountService } from './account.service';
import { CustomerService } from './../customer/customer.service';
@Controller('account')
export class AccountController {
  constructor(
    private service: AccountService,
    private customerService: CustomerService,
  ) {}
  @Post()
  async create(@Body() account: AccountDto): Promise<AccountDto> {
    const customer = await this.customerService.findOne(account.customerId);
    if (!customer) {
      throw new HttpException(
        `Customer with id ${account.customerId} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }
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
