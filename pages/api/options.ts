import { NextApiRequest } from "next";

enum foodType {
    greek="greek"
}

const options:any[] = [
    {"id":0,"name":"Option 0","type":foodType.greek,"lat":"0","long":"0"},
    {"id":1,"name":"Option 1","type":foodType.greek,"lat":"0","long":"0"},
    {"id":2,"name":"Option 2","type":foodType.greek,"lat":"0","long":"0"},
    {"id":3,"name":"Option 3","type":foodType.greek,"lat":"0","long":"0"},
    {"id":4,"name":"Option 4","type":foodType.greek,"lat":"0","long":"0"},
    {"id":5,"name":"Option 5","type":foodType.greek,"lat":"0","long":"0"},
    {"id":6,"name":"Option 6","type":foodType.greek,"lat":"0","long":"0"},
    {"id":7,"name":"Option 7","type":foodType.greek,"lat":"0","long":"0"},
];

export default (req: NextApiRequest, res: any) => {
  if (req.method === "GET") {

    // return message
    res.status(201).json(options);
  }
};

// list of options from FUD Vote v1

// +const restaurantsWithLocation = [
//     +	{name: "Antalya Kebab", lat: 47.5037663, lng: 19.065476699999977},
//     +	{name: "Arriba Taqueria", lat: 47.506594, lng: 19.06178699999998},
//     +	{name: "Bamba Marha Burger Bar", lat: 47.50494699999999, lng: 19.062720000000013},
//     +	{name: "Bel Frit", lat: 47.514102, lng: 19.060236},
//     +	{name: "Buddha Original", lat: 47.5036082, lng: 19.065720599999963},
//     +	{name: "Buddha Original", lat: 47.5039786, lng: 19.05926260000001},
//     +	{name: "Buddha Original", lat: 47.50803399999999, lng: 19.059027000000015},
//     +	{name: "Buddha Original", lat: 47.50066109999999, lng: 19.050911199999973},
//     +	{name: "Burger King", lat: 47.5051223, lng: 19.062888799999996},
//     +	{name: "Burger King", lat: 47.5027213, lng: 19.0539354},
//     +	{name: "Burger King", lat: 47.51015150000001, lng: 19.055767599999967},
//     +	{name: "El Bigote", lat: 47.5088459, lng: 19.057775300000003},
//     +	{name: "El Bigote", lat: 47.49783169999999, lng: 19.05601009999998},
//     +	{name: "El Bigote", lat: 47.5045981, lng: 19.063915199999997},
//     +	{name: "Frici papa", lat: 47.5023408, lng: 19.06371469999999},
//     +	{name: "Grill Pont", lat: 47.505875, lng: 19.05959800000005},
//     +	{name: "Gringos Amigos", lat: 47.498197, lng: 19.055968},
//     +	{name: "hummusbar", lat: 47.5017118, lng: 19.050864400000023},
//     +	{name: "hummusbar", lat: 47.4983987, lng: 19.056646099999966},
//     +	{name: "hummusbar", lat: 47.50791599999999, lng: 19.054339700000014},
//     +	{name: "hummusbar", lat: 47.4971016, lng: 19.06169840000007},
//     +	{name: "hummusbar", lat: 47.5025114, lng: 19.06143050000003},
//     +	{name: "Imázs thai, japán és sushi étterem", lat: 47.5038196, lng: 19.057485000000042},
//     +	{name: "Istanbul török étterem", lat: 47.50650890000001, lng: 19.061996000000022},
//     +	{name: "Kerkyra Gyros Greek Food Bar", lat: 47.504647, lng: 19.066134000000034},
//     +	{name: "KFC", lat: 47.5139834, lng: 19.059412599999973},
//     +	{name: "KFC", lat: 47.5032622, lng: 19.066119399999934},
//     +	{name: "KFC", lat: 47.49697279999999, lng: 19.053936399999998},
//     +	{name: "Lalibela Étterem", lat: 47.5094842, lng: 19.056215199999997},
//     +	{name: "Like Restaurant", lat: 47.5054702, lng: 19.064140700000053},
//     +	{name: "Meat & Sauce", lat: 47.5042828, lng: 19.05907049999996},
//     +	{name: "Most", lat: 47.503936, lng: 19.056951},
//     +	{name: "Mozsár", lat: 47.504203, lng: 19.059694},
//     +	{name: "Nokedli Kifőzde", lat: 47.50770009999999, lng: 19.06466690000002},
//     +	{name: "Nokedli Kifőzde", lat: 47.5075058, lng: 19.05777409999996},
//     +	{name: "Pad Thai", lat: 47.499934, lng: 19.051112},
//     +	{name: "Padlizsánvirág", lat: 47.5034792, lng: 19.0553003},
//     +	{name: "Parázs Presszó", lat: 47.50621779999999, lng: 19.060344399999963},
//     +	{name: "pizza EATaliano", lat: 47.50393889999999, lng: 19.061606100000063},
//     +	{name: "Pizza Forte", lat: 47.50613799999999, lng: 19.06247989999997},
//     +	{name: "Pizza Hut Express", lat: 47.50346880000001, lng: 19.066124299999956},
//     +	{name: "Pizza Hut Express", lat: 47.514102, lng: 19.060236},
//     +	{name: "Pizzica", lat: 47.504247, lng: 19.059338700000012},
//     +	{name: "Sir Lancelot Lovagi Étterem", lat: 47.508183, lng: 19.05673200000001},
//     +	{name: "Star Kebab Török Étterem", lat: 47.5094234, lng: 19.057123199999978},
//     +	{name: "SUPPE Bistro", lat: 47.5035247, lng: 19.058224300000006},
//     +	{name: "Titiz Turkish Restaurant", lat: 47.5063069, lng: 19.054939200000035},
//     +	{name: "Trófea Grill Restaurant", lat: 47.49989979999999, lng: 19.059456899999986},
//     +	{name: "Vidám kínai büfé", lat: 47.5023195, lng: 19.05476759999999},
//     +	{name: "Zing Burger", lat: 47.502748, lng: 19.064008000000058},
//     +	{name: "Zing Burger", lat: 47.4992046, lng: 19.05810150000002},
//     +	{name: "Zing Burger", lat: 47.501419, lng: 19.04931099999999}
//     +];
    