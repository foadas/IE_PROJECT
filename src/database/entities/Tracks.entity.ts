import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Tracks' })
export class Tracks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  names: string;

  @Column()
  artist_names: string;

  @Column()
  artist_pop: number;

  @Column()
  albums: string;
}
