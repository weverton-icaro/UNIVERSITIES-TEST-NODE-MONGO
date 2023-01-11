import { Universities } from '@infra/database/entities/Universities';
import { AppError } from '@infra/error/AppError';
import { NotFound, UniversityAlreadyExists } from '@infra/error/ErrorMessages';

interface IUpdateUniversityRequest{
  id: string;
  name: string;
  web_pages:string[];
  domains: string[];
}

export class UpdateUniversity{
  async execute(data: IUpdateUniversityRequest){
    const university = await Universities.findById(data.id)

    if(!university){
      throw new AppError(NotFound, 404)
    }

    const existUniversity = await Universities.findOne(
      {
        name: data.name,
      })

    if(existUniversity){
      throw new AppError(UniversityAlreadyExists)
    }

    university.name = data.name;
    university.domains = data.domains;
    university.web_pages = data.web_pages;

    await university.save()

    return university
  }
}