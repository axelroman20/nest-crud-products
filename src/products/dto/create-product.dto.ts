import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The title of a product',
    uniqueItems: true,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'The price of a product',
    nullable: true,
    default: 0,
  })
  @IsOptional()
  @IsPositive()
  @IsNumber()
  price?: number;

  @ApiProperty({
    description: 'The description of a product',
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The slug of a product',
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({
    description: 'The stock of a product',
    nullable: true,
    default: 0,
  })
  @IsOptional()
  @IsPositive()
  @IsInt()
  stock?: number;

  @ApiProperty({
    description: 'The sizes of a product',
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    description: 'The gender of a product',
    default: [],
  })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    description: 'The tag of a product',
    nullable: true,
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    description: 'The images of a product',
    nullable: true,
    default: [],
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
