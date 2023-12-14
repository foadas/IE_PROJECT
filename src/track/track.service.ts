import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Tracks } from "../database/entities/Tracks.entity";
import { Repository } from "typeorm";

@Injectable()
export class TrackService {

  constructor(
    @InjectRepository(Tracks) private trackRepo: Repository<Tracks>){}

  async getTracks() {
    return await this.trackRepo.find();
  }
}
