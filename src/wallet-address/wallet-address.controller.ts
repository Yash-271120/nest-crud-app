import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  async create(@Body() createWalletAddressDto: CreateWalletAddressDto) {
    try {
      return await this.walletAddressService.create(createWalletAddressDto);
    } catch (error) {
      throw new BadRequestException(
        'Failed to create wallet address.',
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.walletAddressService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to fetch wallet addresses.',
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.walletAddressService.findOne(+id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch wallet address.');
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWalletAddressDto: UpdateWalletAddressDto,
  ) {
    try {
      return await this.walletAddressService.update(
        +id,
        updateWalletAddressDto,
      );
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to update wallet address.',
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.walletAddressService.remove(+id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to delete wallet address.',
      );
    }
  }
}
