import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';
import { InstitutionClass } from './class.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject_name: string;

  @ManyToMany(
    () => InstitutionClass,
    (institutionClass) => institutionClass.subjects,
  )
  classes: InstitutionClass[]; // Relación Asignatura - Clase

  @ManyToMany(() => Student, (student) => student.subjects)
  students: Student[];

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  teachers: Teacher[];
}
