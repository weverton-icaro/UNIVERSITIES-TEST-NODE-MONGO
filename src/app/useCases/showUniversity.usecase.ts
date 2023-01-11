import { Universities } from '@infra/database/entities/Universities';
import { AppError } from '@infra/error/AppError';
import { NotFound } from '@infra/error/ErrorMessages';

export class ShowUniversity{
  async execute(id: string){
    const university = await Universities.findById(id)

    if(!university) {
      throw new AppError(NotFound, 404)
    }

    return university;
  }
}