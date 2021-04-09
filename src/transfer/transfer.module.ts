import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferEntity } from './entity/transfer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransferEntity])],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
