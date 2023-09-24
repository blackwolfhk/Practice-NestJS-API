import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../types/cat';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(cat: Cat): Promise<Cat> {
    const createdCat = new this.catModel(cat);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id).exec();
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    const updatedCat = await this.catModel
      .findByIdAndUpdate(id, cat, {
        new: true,
      })
      .exec();
    if (!updatedCat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return updatedCat;
  }

  async remove(id: string): Promise<Cat> {
    const deletedCat = await this.catModel.findByIdAndRemove(id).exec();
    if (!deletedCat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return deletedCat;
  }
}
