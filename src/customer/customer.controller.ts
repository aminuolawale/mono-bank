import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private service: CustomerService) {}
  @Post()
  create(@Body() customer: CustomerDto): Promise<CustomerDto> {
    return this.service.create(customer);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CustomerDto> {
    return this.service.findOne(id);
  }
  @Get()
  findAll(): Promise<CustomerDto[]> {
    return this.service.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() customer: CustomerDto,
  ): Promise<any> {
    return this.service.update(id, customer);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.service.delete(id);
  }
}
