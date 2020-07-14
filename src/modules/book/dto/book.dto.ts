import { Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookDto {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  price: number;
}
