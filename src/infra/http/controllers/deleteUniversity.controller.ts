import { DeleteUniversity } from "@app/useCases/deleteUniversity.usecase"
import { Request, Response } from "express"

export class DeleteUniversityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteService = new DeleteUniversity()
    const university = await deleteService.execute(id)
    return response.status(204).json(university)
  }
}