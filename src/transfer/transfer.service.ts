import { Injectable } from '@nestjs/common';
import { TransferDto } from './dto/transfer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TransferEntity } from './entity/transfer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(TransferEntity)
    private repository: Repository<TransferEntity>,
  ) {}
  create(transfer: TransferDto): Promise<TransferDto> {
    return this.repository.save(transfer);
  }

  findOne(id: number): Promise<TransferDto> {
    return this.repository.findOne({ id: id });
  }
  findAll(): Promise<TransferDto[]> {
    return this.repository.find();
  }
}
