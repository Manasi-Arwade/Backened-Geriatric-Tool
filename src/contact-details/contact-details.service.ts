import { Injectable } from '@nestjs/common';
import { UpdateContactDto } from './dto/update-contact-detail.dto';
import { CreateContactDto } from './dto/create-contact-detail.dto';



@Injectable()
export class ContactDetailsService {
  deleteContact(id: number) {
    throw new Error('Method not implemented.');
  }
  updateContact(id: number, updateContactDto:UpdateContactDto) {
    throw new Error('Method not implemented.');
  }
  private contacts: CreateContactDto[] = [];

  getAllContacts(): CreateContactDto[] {
    return this.contacts;
  }

  getContactById(id: number): CreateContactDto {
    return this.contacts.find(contact => contact.id === id);
  }

  createContact(contactDto: CreateContactDto): CreateContactDto {
    this.contacts.push(contactDto);
    return contactDto;
  }
}
