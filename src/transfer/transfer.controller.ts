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
import { TransferService, EntryService } from './transfer.service';
import { TransferDto, EntryDto } from './dto/transfer.dto';
import { AccountService } from '../account/account.service';
import { AccountDto } from '../account/dto/account.dto';
@Controller('transfer')
export class TransferController {
  constructor(
    private service: TransferService,
    private entryService: EntryService,
    private accountService: AccountService,
  ) {}
  @Post()
  async create(@Body() transfer: TransferDto): Promise<TransferDto> {
    let account1 = await this.accountService.findOne(transfer.fromAccountId);
    let account2 = await this.accountService.findOne(transfer.toAccountId);
    if (!account1 || !account2 || account1.id == account2.id) {
      throw new HttpException(`Invalid accounts`, HttpStatus.BAD_REQUEST);
    }
    if (account1.balance < transfer.amount) {
      throw new HttpException(
        'Source acccount balance is too low',
        HttpStatus.BAD_REQUEST,
      );
    }
    let entry1 = new EntryDto();
    entry1.accountId = transfer.fromAccountId;
    entry1.amount = -transfer.amount;
    entry1.type = 'debit';
    await this.entryService.create(entry1);
    let entry2 = new EntryDto();
    entry2.accountId = transfer.toAccountId;
    entry2.amount = transfer.amount;
    entry2.type = 'credit';
    await this.entryService.create(entry2);
    let balance1 = account1.balance - transfer.amount;
    let update1 = new AccountDto();
    update1.balance = balance1;
    this.accountService.update(transfer.fromAccountId, update1);
    let balance2 = account2.balance + transfer.amount;
    let update2 = new AccountDto();
    update2.balance = balance2;
    this.accountService.update(transfer.toAccountId, update2);
    return this.service.create(transfer);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TransferDto> {
    return this.service.findOne(id);
  }
  @Get()
  findAll(@Query() query): Promise<EntryDto[]> {
    let accountId = query['accountId'];
    return this.entryService.findAll(accountId);
  }
}
