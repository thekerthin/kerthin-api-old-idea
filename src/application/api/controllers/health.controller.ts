import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Health')
@Controller('health')
export default class HealthController {
  @Get()
  health() {
    return 'service alive';
  }
}
