import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';


import { ContactDetailsService } from './contact-details.service';
import { UpdateContactDto } from './dto/update-contact-detail.dto';
import { CreateContactDto } from './dto/create-contact-detail.dto';

@Controller('contact-details')
export class ContactDetailsController {
  constructor(private readonly contactService: ContactDetailsService) {}

  @Get()
  getAllContacts() {
    return this.contactService.getAllContacts();
  }

  @Get(':id')
  getContactById(@Param('id') id: number) {
    return this.contactService.getContactById(id);
  }

  @Post()
  createContact(@Body() createContactDto:CreateContactDto) {
    return this.contactService.createContact(createContactDto);
  }

  @Put(':id')
  updateContact(@Param('id') id: number, @Body() updateContactDto:UpdateContactDto ) {
    return this.contactService.updateContact(id, updateContactDto);
  }

  @Delete(':id')
  deleteContact(@Param('id') id: number) {
    return this.contactService.deleteContact(id);
  }
}
