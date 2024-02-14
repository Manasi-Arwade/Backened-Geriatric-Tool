import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient/entities/patient.entity';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot
    ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'abcd@1234',
      database: 'databasep',
      entities: [Patient],
      synchronize: true,
    }),
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
