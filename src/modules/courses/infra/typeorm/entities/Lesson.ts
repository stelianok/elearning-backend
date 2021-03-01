import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Course from './Course';

@Entity('lessons')
class Lesson {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('int')
  order: number;

  @Column('decimal')
  duration: number;

  @Column({ unique: true })
  video_id: string;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'id' })
  course: Course;

  @Column()
  course_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
export default Lesson;
