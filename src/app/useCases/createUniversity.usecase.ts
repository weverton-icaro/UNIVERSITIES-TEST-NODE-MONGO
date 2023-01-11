import { IUniversity } from '@app/interfaces/IUniversity';
import { Universities } from '@infra/database/entities/Universities';
import { AppError } from '@infra/error/AppError';
import { UniversityAlreadyExists } from '@infra/error/ErrorMessages';

export class CreateUniversity {
  async execute(university: IUniversity) {
    const existUniversity = await Universities.findOne(
      {
        country: university.country,
        name: university.name,
        "state-province": university['state-province']
      })

    if(existUniversity){
      throw new AppError(UniversityAlreadyExists)
    }

    const generateAlphaTwoCode = university.alpha_two_code.substring(0, 2)

    const newUniversity = new Universities({
      country: university.country,
      name: university.name,
      "state-province": university['state-province'],
      web_pages: university.web_pages,
      alpha_two_code: generateAlphaTwoCode.toUpperCase(),
      domains: university.domains,
    })

    await newUniversity.save()

    return newUniversity
  }
}