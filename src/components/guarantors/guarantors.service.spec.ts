import { Test, TestingModule } from '@nestjs/testing';
import { GuarantorsService } from './guarantors.service';

describe('GuarantorsService', () => {
  let service: GuarantorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuarantorsService],
    }).compile();

    service = module.get<GuarantorsService>(GuarantorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
