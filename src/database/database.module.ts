import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { developmentDbConfig } from './developmentDatasource.config';
import { stageDbConfig } from './stageDataSource.config';
import { testDbConfig } from './testDataSource.config';

const databaseConfigurations = {
  development: developmentDbConfig,
  test: testDbConfig,
  stage: stageDbConfig,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => databaseConfigurations[process.env.NODE_ENV],
      
    }),
  ],
})
class DatabaseModule {}
export default DatabaseModule;
