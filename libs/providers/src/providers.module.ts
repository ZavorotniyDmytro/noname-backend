import { Brand, Device, Model } from '@lib/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'phone-fix',
      entities: [Model, Device, Brand],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class ProvidersModule {}
