// src/patients/patient.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  async findOne(id: number): Promise<Patient> {
    return this.patientRepository.findOne(id);
  }

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const newPatient = this.patientRepository.create(createPatientDto);
    return this.patientRepository.save(newPatient);
  }

  async update(id: number, updatePatientDto: CreatePatientDto): Promise<Patient> {
    await this.patientRepository.update(id, updatePatientDto);
    return this.patientRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.patientRepository.delete(id);
  }
}
