import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateWalletAddressDto } from './dto/create-wallet-address.dto';
import { UpdateWalletAddressDto } from './dto/update-wallet-address.dto';

@Injectable()
export class WalletAddressService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      return await this.prisma.walletAddress.findMany();
    } catch (error) {
      throw new Error('Failed to fetch wallet addresses.');
    }
  }

  async findOne(id: number) {
    try {
      const address = await this.prisma.walletAddress.findUnique({
        where: { id },
      });
      if (!address) {
        throw new NotFoundException('Wallet address not found.');
      }
      return address;
    } catch (error) {
      throw error;
    }
  }

  async create(data: CreateWalletAddressDto) {
    try {
      return await this.prisma.walletAddress.create({ data });
    } catch (error) {
      throw new Error('Failed to create wallet address.');
    }
  }

  async update(id: number, data: UpdateWalletAddressDto) {
    try {
      const address = await this.prisma.walletAddress.update({
        where: { id },
        data,
      });
      if (!address) {
        throw new NotFoundException('Wallet address not found.');
      }
      return address;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const address = await this.prisma.walletAddress.delete({ where: { id } });
      if (!address) {
        throw new NotFoundException('Wallet address not found.');
      }
      return address;
    } catch (error) {
      throw error;
    }
  }
}
