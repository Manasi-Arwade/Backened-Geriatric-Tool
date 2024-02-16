import { Test, TestingModule } from '@nestjs/testing';
import { ContactDetailsController } from './contact-details.controller';
import { ContactDetailsService } from './contact-details.service';

describe('ContactDetailsController', () => {
  let controller: ContactDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactDetailsController],
      providers: [ContactDetailsService],
    }).compile();

    controller = module.get<ContactDetailsController>(ContactDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
