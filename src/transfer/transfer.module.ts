import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService, EntryService } from './transfer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferEntity, EntryEntity } from './entity/transfer.entity';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [
    AccountModule,
    TypeOrmModule.forFeature([TransferEntity]),
    TypeOrmModule.forFeature([EntryEntity]),
  ],
  controllers: [TransferController],
  providers: [TransferService, EntryService],
})
export class TransferModule {}
