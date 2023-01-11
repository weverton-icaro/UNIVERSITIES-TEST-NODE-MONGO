import { faker } from "@faker-js/faker";
import universityModel, { IUniversityInterface } from "@infra/database/entities/UniveristiesTest.model";
import { connectDBForTesting, disconnectDBForTesting } from "./connectDBForTesting";

jest.useRealTimers();

describe("Universities test", () => {

  const universityData: IUniversityInterface  = {
    alpha_two_code: faker.address.countryCode('alpha-2'),
    name: faker.name.fullName(),
    web_pages: [
      "http://www.123.br/"
    ],
    "state-province": faker.address.cityName(),
    domains: [
      "123.br"
    ],
    country: faker.address.county()
  };
  const university = new universityModel({ ...universityData });

  beforeAll(async () => {
    await connectDBForTesting();
  });
  
  afterAll(async () => {
    await universityModel.collection.drop();
    await disconnectDBForTesting();
  });

  it("should be able a create a new university.", async () => {
    const createdUniversity = await university.save();
    expect(createdUniversity).toBeDefined();
    expect(createdUniversity._id).toBe(university._id);
    expect(createdUniversity.name).toBe(university.name);
  });

  it("should not be able to create a new university if the existing one.", async () => {
    const universityDataNotExists: IUniversityInterface  = {
      alpha_two_code: "BR",
      name: "Universidade 123",
      web_pages: [
        "http://www.123.br/"
      ],
      "state-province": "Ceilândia",
      domains: [
        "123.br"
      ],
      country: "Brazil"
    };
    const university = new universityModel({ ...universityDataNotExists });

    expect(
      await universityModel.findOne({
        name: university.name,
        "state-province": university['state-province'],
        country: university.country
      })
    ).toBeNull();
    expect(universityModel).not.toContainEqual(university);
  })

  it("should be able find a university", async () => {
    await university.save();
    const fetchedUniversity = await universityModel.findOne({ _id: university._id });
    expect(fetchedUniversity).toBeDefined();
    expect(fetchedUniversity).toMatchObject(universityData);
  });

  it("shoul be able update a university", async () => {
      const universityDataUpdate: IUniversityInterface = {
        alpha_two_code: faker.address.countryCode('alpha-2'),
        name: faker.name.fullName(),
        web_pages: [
          "http://www.123.br/"
        ],
        "state-province": faker.address.cityName(),
        domains: [
          "123.br"
        ],
        country: faker.address.county()
      };
      await universityModel.updateOne({ _id: university._id }, { ...universityDataUpdate });
      const fetchedUniversity = await universityModel.findOne({ _id: university._id });
      expect(fetchedUniversity).toBeDefined();
      expect(fetchedUniversity).toMatchObject(universityDataUpdate);
      expect(fetchedUniversity).not.toMatchObject(universityData);
  })

  test("should be able delete a university.", async () => {
    await universityModel.deleteOne({ _id: university._id });
    const fetchedUniversity = await universityModel.findOne({ _id: university._id });
    expect(fetchedUniversity).toBeNull();
  });
});

