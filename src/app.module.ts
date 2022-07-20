import { Module } from '@nestjs/common';
import { RepasModule } from './repas/repas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RepasModule, AuthModule],
})
export class AppModule {}
