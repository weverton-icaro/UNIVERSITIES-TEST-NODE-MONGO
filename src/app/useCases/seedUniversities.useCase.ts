import { CreateCollection } from "@app/services/createCollection";
import { Universities } from "@infra/database/entities/Universities";

export class SeedUniversities {
  async execute() {
    const countUniveristies = await Universities.count()

    if (countUniveristies > 0) return

    const createCollection = new CreateCollection()

    await Promise.all([
      "argentina",
      "brazil",
      "chile",
      "colombia",
      "paraguai",
      "peru",
      "suriname",
      "uruguay"
    ].map(async (country: string) => await createCollection.handleData(country)))
  }
}