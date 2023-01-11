import { ShowUniversity } from '@app/useCases/showUniversity.usecase';
import { Request, Response } from 'express';

export class ShowUniversitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const showService = new ShowUniversity()
    const university = await showService.execute(id)
    return response.json(university)
  }
}