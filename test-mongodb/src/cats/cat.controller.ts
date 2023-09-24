import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from '../types/cat';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() cat: Cat) {
    return this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    try {
      return await this.catsService.findOne(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() cat: Cat): Promise<Cat> {
    try {
      return await this.catsService.update(id, cat);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Cat> {
    try {
      return await this.catsService.remove(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
