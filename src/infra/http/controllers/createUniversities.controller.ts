import { IUniversity } from "@app/interfaces/IUniversity";
import { CreateUniversity } from "@app/useCases/createUniversity.usecase";
import { Request, Response } from "express";

export class CreateUniversitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createService = new CreateUniversity()
    const university = await createService.execute(request.body as IUniversity)
    return response.status(201).json(university)
  }
}