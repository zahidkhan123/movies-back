import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie/movie';
import { FileUploadService } from 'src/file-upload/file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieService, FileUploadService],
  controllers: [MovieController]
})
export class MovieModule { }
