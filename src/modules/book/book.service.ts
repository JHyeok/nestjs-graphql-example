import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = new Book();
    book.name = createBookDto.name;
    book.price = createBookDto.price;

    return await this.bookRepository.save(book);
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: string): Promise<BookDto> {
    return await this.bookRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
