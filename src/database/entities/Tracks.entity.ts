import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Tracks' })
export class Tracks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  trackId: number;
  @Column()
  names: string;

  @Column()
  artist_names: string;

  @Column({ nullable: true })
  artist_pop: string;

  @Column()
  albums: string;
  @Column({ nullable: true })
  track_pop: string;
  @Column()
  durations_ms: string;
  @Column()
  playlist_name: string;
}
