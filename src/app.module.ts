import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, AccountModule, TransferModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
