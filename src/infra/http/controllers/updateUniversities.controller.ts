import { UpdateUniversity } from "@app/useCases/updateUniversity.usecase"
import { Request, Response } from "express"

export class UpdateUniversityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const {
      name,
      web_pages,
      domains,
    } = request.body

    const updateservice = new UpdateUniversity()

    const university = await updateservice.execute({
      id: String(id),
      name,
      web_pages,
      domains,})

    return response.status(202).json(university)
  }
}