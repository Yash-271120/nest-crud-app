import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateWalletAddressDto {
  @IsInt()
  userId: number;

  @IsString()
  @IsNotEmpty()
  address: string;
}