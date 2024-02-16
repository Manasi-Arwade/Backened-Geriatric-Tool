import { Test, TestingModule } from '@nestjs/testing';
import { ContactDetailsService } from './contact-details.service';

describe('ContactDetailsService', () => {
  let service: ContactDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactDetailsService],
    }).compile();

    service = module.get<ContactDetailsService>(ContactDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
