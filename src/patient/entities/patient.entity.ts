// patient/patient.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  PatientName: string;

  @Column({ nullable: true })
  age: number;

  @Column({nullable:true})
  Gender: string;

  @Column({nullable:true})
  ConsultingDate: string;

  @Column({nullable:true})
  MRN : string;


  // Add more fields as needed
}
