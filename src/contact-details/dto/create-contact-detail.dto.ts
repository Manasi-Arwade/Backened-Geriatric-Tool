export class CreateContactDto {
    id: number;
    readonly contactType: 'email' | 'phoneNumber';
    readonly contactValue: string;
  }
  
 
  
  