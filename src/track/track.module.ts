import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { Tracks } from '../database/entities/Tracks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tracks])],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
