import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
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
    let entry1 = new EntryDto();
    entry1.accountId = transfer.fromAccountId;
    entry1.amount = -transfer.amount;
    await this.entryService.create(entry1);
    let entry2 = new EntryDto();
    entry2.accountId = transfer.toAccountId;
    entry2.amount = transfer.amount;
    await this.entryService.create(entry2);
    let account1 = this.accountService.findOne(transfer.fromAccountId);
    let balance1 = (await account1).balance - transfer.amount;
    let update1 = new AccountDto();
    update1.balance = balance1;
    this.accountService.update(transfer.fromAccountId, update1);
    let account2 = this.accountService.findOne(transfer.toAccountId);
    let balance2 = (await account2).balance + transfer.amount;
    let update2 = new AccountDto();
    update2.balance = balance2;
    this.accountService.update(transfer.toAccountId, update1);
    return this.service.create(transfer);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TransferDto> {
    return this.service.findOne(id);
  }
  @Get()
  findAll(@Query() query): Promise<TransferDto[]> {
    let accountId = query['accountId'];
    return this.service.findAll(accountId);
  }
}
