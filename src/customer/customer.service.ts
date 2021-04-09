import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private repository: Repository<CustomerEntity>,
  ) {}
  create(customer: CustomerDto): Promise<CustomerDto> {
    return this.repository.save(customer);
  }

  findOne(id: number): Promise<CustomerDto> {
    return this.repository.findOne({ id: id });
  }
  findAll(): Promise<CustomerDto[]> {
    return this.repository.find();
  }
  update(id: number, customer: CustomerDto): Promise<any> {
    return this.repository.update(id, customer);
  }
  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
