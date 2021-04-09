import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TransferService } from './transfer.service';
import { TransferDto } from './dto/transfer.dto';
@Controller('transfer')
export class TransferController {
  constructor(private service: TransferService) {}
  @Post()
  create(@Body() transfer: TransferDto): Promise<TransferDto> {
    return this.service.create(transfer);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TransferDto> {
    return this.service.findOne(id);
  }
  @Get()
  findAll(): Promise<TransferDto[]> {
    return this.service.findAll();
  }
}
