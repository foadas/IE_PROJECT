import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Tracks } from "../database/entities/Tracks.entity";
import { ILike, Like, MoreThanOrEqual, Repository } from "typeorm";

@Injectable()
export class TrackService {

  constructor(
    @InjectRepository(Tracks) private trackRepo: Repository<Tracks>){}

  async getTracks() {
    return await this.trackRepo.find();
  }
  async FilterTracks(type, search) {
    const whereCondition = {};
    if(type=== 'trackId'){
      search = Number(search);
      whereCondition[type] = search;
    }else  if(type==='durations_ms'){
      search = Number(search);
      whereCondition[type] = MoreThanOrEqual(search);
    } else {
      whereCondition[type] = ILike(`%${search}%`);

      // For numeric searches, use MoreThanOrEqual
    }
      // For string searches, use ILike for case-insensitive matching
    console.log('ffffffffff',whereCondition);
    return await this.trackRepo.find({ where: whereCondition });
  }
}
