import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact-detail.dto';

export class UpdateContactDto {
    readonly contactType?: 'email' | 'phoneNumber';
    readonly contactValue?: string;
  }
  
