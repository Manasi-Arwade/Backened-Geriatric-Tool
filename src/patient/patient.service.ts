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

  findAll() {
    return this.patientRepository.find();
  }

   findOne(id: number) {
    return this.patientRepository.findOneBy({id});
  }

  create(createPatientDto: CreatePatientDto){
    const newPatient = this.patientRepository.create(createPatientDto);
    return this.patientRepository.save(newPatient);
  }

   update(id: number, updatePatientDto: CreatePatientDto) {
     this.patientRepository.update(id, updatePatientDto);
    return this.patientRepository.findOneBy({id});
  }

  remove(id: number) {
     this.patientRepository.delete(id);
  }
}
