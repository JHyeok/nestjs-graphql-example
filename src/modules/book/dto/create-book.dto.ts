import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookDto {
  @Field()
  name: string;

  @Field(() => Int)
  price: number;
}
