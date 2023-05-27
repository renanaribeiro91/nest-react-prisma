import { IsNotEmpty, IsBoolean, IsDateString, IsString, IsNumber, IsOptional, MinLength, MaxLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsDateString()
  birthdate: Date;

  @IsNotEmpty()
  @IsNumber()
  zipcode: number;

  @IsBoolean()
  @IsOptional()
  acceptedTermsAndConditions: boolean;

  @IsString()
  @MinLength(9)
  // @IsOptional()
  document: string;

  @IsString()
  @IsOptional()
  street: string | null;

  @IsString()
  @IsOptional()
  neighborhood: string | null;

  @IsString()
  @IsOptional()
  city: string | null;

  @IsString()
  @IsOptional()
  state: string | null;

  @IsDateString()
  @IsOptional()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date | null;
}
