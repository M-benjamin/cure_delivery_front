import colors from "../assets/styles/colors";

const listings = [
  {
    title: "Experiences",
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: require("./photos/listing1.png"),
        type: "FERVEX",
        // title: "Sail past Japan's largest port with a certified skipper",
        // location: "Paris, France",
        price: 5,
        color: colors.gray04
      },
      {
        id: 2,
        photo: require("./photos/listing2.png"),
        type: "DOLIPRANE",
        // title: "Funny cheesemonger takes you on a Tour de Fromage",
        // location: "Paris, France",
        price: 5,
        color: colors.darkOrange
      },
      {
        id: 3,
        photo: require("./photos/listing3.png"),
        type: "VENTOLLIN",
        // title: 'Cycling, "KFC" & Drinking for your Seoul',
        // location: "Seoul, South Korea",
        stars: 10,
        color: colors.black
      }
    ]
  }
];

export default listings;
