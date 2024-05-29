import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';

@Module({
  providers: [WalletAddressService, PrismaService],
  controllers: [WalletAddressController],
})
export class WalletAddressModule {}
