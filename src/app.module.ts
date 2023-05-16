import { ProvidersModule } from '@lib/providers/providers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProvidersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
