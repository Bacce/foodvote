import { NextApiRequest } from "next";
import { foodCategory } from "../../enums";
import { IOption } from "../../types";

const options: IOption[] = [
  { "id": 0, "name": "Antalya Kebab", "cat": foodCategory.turkish, "lat": 47.5037135, "long": 19.0630162 },
  { "id": 1, "name": "Apresto", "cat": foodCategory.italian, "lat": 47.5032534, "long": 19.0578847 },
  { "id": 2, "name": "Arriba taqueria", "cat": foodCategory.mexican, "lat": 47.5065939, "long": 19.0571789 },
  { "id": 3, "name": "Bamba Marha", "cat": foodCategory.american, "lat": 47.5049056, "long": 19.0600311 },
  { "id": 4, "name": "Belozzo", "cat": foodCategory.italian, "lat": 47.5051828, "long": 19.0625801 },
  { "id": 5, "name": "Buddha Original", "cat": foodCategory.thai, "lat": 47.5039895, "long": 19.0621469 },
  { "id": 6, "name": "Burger King", "cat": foodCategory.american, "lat": 47.5051828, "long": 19.0625801 },
  { "id": 7, "name": "Hummus Bar", "cat": foodCategory.middleEast, "lat": 47.5053989, "long": 19.0528409 },
  { "id": 8, "name": "Indigó", "cat": foodCategory.indian, "lat": 47.5071361, "long": 19.0524011 },
  { "id": 9, "name": "Istanbul Kebab", "cat": foodCategory.turkish, "lat": 47.5021174, "long": 19.0475291 },
  { "id": 10, "name": "KFC", "cat": foodCategory.american, "lat": 47.5033953, "long": 19.0619785 },
  { "id": 11, "name": "Lalibella", "cat": foodCategory.turkish, "lat": 47.5093551, "long": 19.05626 },
  { "id": 12, "name": "McDonalds", "cat": foodCategory.american, "lat": 47.5053993, "long": 19.0626619 },
  { "id": 13, "name": "Most", "cat": foodCategory.hungarian, "lat": 47.5038809, "long": 19.0544394 },
  { "id": 14, "name": "Mozsár étterme", "cat": foodCategory.hungarian, "lat": 47.5042789, "long": 19.054683 },
  { "id": 15, "name": "Pad Thai", "cat": foodCategory.thai, "lat": 47.5096771, "long": 19.0459548 },
  { "id": 16, "name": "Padlizsánvirág", "cat": foodCategory.turkish, "lat": 47.503488, "long": 19.0506327 },
  { "id": 17, "name": "Pirate Empire", "cat": foodCategory.american, "lat": 0, "long": 0 },
  { "id": 18, "name": "Pizza Forte", "cat": foodCategory.american, "lat": 47.5062517, "long": 19.0498315 },
  { "id": 19, "name": "Pizza Hut", "cat": foodCategory.american, "lat": 47.5062508, "long": 19.0497886 },
  { "id": 20, "name": "Pizzica", "cat": foodCategory.italian, "lat": 47.5043695, "long": 19.0564848 },
  { "id": 21, "name": "Star Kebab", "cat": foodCategory.turkish, "lat": 47.5093872, "long": 19.0391135 },
  { "id": 22, "name": "Suppe Bisztró", "cat": foodCategory.soup, "lat": 47.5036224, "long": 19.0536809 },
  { "id": 23, "name": "Titiz", "cat": foodCategory.turkish, "lat": 47.5062202, "long": 19.0522057 },
  { "id": 24, "name": "Vidám Kínai büfé", "cat": foodCategory.asian, "lat": 47.5023893, "long": 19.0519691 },
  { "id": 25, "name": "Viet Cuisine", "cat": foodCategory.asian, "lat": 47.5043065, "long": 19.0543858 },
  { "id": 26, "name": "Zing Burger", "cat": foodCategory.american, "lat": 47.5023888, "long": 19.0442175 },
];

export default (req: NextApiRequest, res: any) => {
  if (req.method === "GET") {
    res.status(201).json(options);
  }
};
