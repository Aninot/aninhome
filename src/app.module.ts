import { Module } from '@nestjs/common';
import { RepasModule } from './repas/repas.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { RecetteModule } from './recette/recette.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RepasModule,
    UserModule,
    AuthModule,
    DatabaseModule,
    RecetteModule,
  ],
})
export class AppModule {}
