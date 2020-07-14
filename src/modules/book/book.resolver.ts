import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Resolver('Book')
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [BookDto])
  async getBooks() {
    return await this.bookService.findAll();
  }

  @Mutation(() => BookDto)
  async createBook(@Args('data') data: CreateBookDto) {
    return await this.bookService.create(data);
  }
}
