import { ListUniversities } from '@app/useCases/listUniversities.usecase';
import { Request, Response } from 'express';
import { ListUniversityViewModel } from '../viewModels/listUniversityViewModel';

export class ListUniversitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name,  country, page } = request.query

    const listService = new ListUniversities()

    const result = await listService.execute({
      name: name && String(name),
      country: country && String(country),
      page: page && Number(page)
    })

    return response.json({
      ...result,
      data: result.data.map(ListUniversityViewModel.toListHttp)
    })
  }
}