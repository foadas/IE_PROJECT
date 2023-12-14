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

  @Column()
  artist_pop: number;

  @Column()
  albums: string;
  @Column()
  track_pop: string;
  @Column()
  durations_ms: string;
  @Column()
  playlist_name: string;
}
