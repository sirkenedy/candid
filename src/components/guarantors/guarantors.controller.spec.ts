import { Test, TestingModule } from '@nestjs/testing';
import { GuarantorsController } from './guarantors.controller';
import { GuarantorsService } from './guarantors.service';

describe('GuarantorsController', () => {
  let controller: GuarantorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuarantorsController],
      providers: [GuarantorsService],
    }).compile();

    controller = module.get<GuarantorsController>(GuarantorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
