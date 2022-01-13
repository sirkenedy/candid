import { Test, TestingModule } from '@nestjs/testing';
import { RemarksService } from './remarks.service';

describe('RemarksService', () => {
  let service: RemarksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemarksService],
    }).compile();

    service = module.get<RemarksService>(RemarksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
