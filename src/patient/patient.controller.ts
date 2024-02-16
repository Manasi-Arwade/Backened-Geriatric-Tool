// src/patients/patients.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';

import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.patientService.findOne(Number(id));
  }

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.create(createPatientDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePatientDto: CreatePatientDto) {
    return this.patientService.update(Number(id), updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.patientService.remove(Number(id));
  }
}
