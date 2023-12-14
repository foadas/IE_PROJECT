import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseModule from '../database/database.module';
import { Tracks } from '../database/entities/Tracks.entity';
import { CsvtojsonCommand } from './csvtojsonCommand';
@Module({
  imports: [databaseModule, TypeOrmModule.forFeature([Tracks])],
  providers: [CsvtojsonCommand],
})
export class CommandModule {}