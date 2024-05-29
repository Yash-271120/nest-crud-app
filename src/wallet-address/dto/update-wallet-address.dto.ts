import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateWalletAddressDto {
  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address?: string;
}