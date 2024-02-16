import { Module } from '@nestjs/common';
import { ContactDetailsService } from './contact-details.service';
import { ContactDetailsController } from './contact-details.controller';

@Module({
  controllers: [ContactDetailsController],
  providers: [ContactDetailsService],
})
export class ContactDetailsModule {}
