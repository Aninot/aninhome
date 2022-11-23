import { Module } from '@nestjs/common';
import { RepasService } from './repas.service';
import { RepasController } from './repas.controller';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

@Module({
  providers: [RepasService, JwtStrategy],
  controllers: [RepasController],
})
export class RepasModule {}
