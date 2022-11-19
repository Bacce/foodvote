import { NextApiRequest } from "next";
import { foodCategory } from "../../enums";
import { IOption } from "../../types";

const options: IOption[] = [
  { "id": 0, "name": "Antalya Kebab", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 1, "name": "Apresto", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 2, "name": "Arriba taqueria", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 3, "name": "Bamba Marha", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 4, "name": "Buddha Original", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 5, "name": "Burger King", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 6, "name": "Hummus Bar", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 7, "name": "Indigó", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 8, "name": "Istanbul Kebab", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 9, "name": "KFC", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 10, "name": "Most", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 11, "name": "Mozsár étterme", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 12, "name": "Pad Thai", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 13, "name": "Padlizsánvirág", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 14, "name": "Parázs presszó", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 15, "name": "Pizza Forte", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 16, "name": "Pizza Hut", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 17, "name": "Pizzica", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 18, "name": "Star Kebab", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 19, "name": "Suppe Bisztró", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 20, "name": "Titiz", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 21, "name": "Vidám Kínai büfé", "cat": foodCategory.na, "lat": 0, "long": 0 },
  { "id": 22, "name": "Zing Burger", "cat": foodCategory.na, "lat": 0, "long": 0 },
];

export default (req: NextApiRequest, res: any) => {
  if (req.method === "GET") {
    res.status(201).json(options);
  }
};
