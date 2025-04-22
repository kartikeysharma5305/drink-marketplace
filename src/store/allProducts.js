// src/store/productSlice.js
import can1 from "../assets/images/can1.png";
import can2 from "../assets/images/can2.png";
import can3 from "../assets/images/can3.png";
import can4 from "../assets/images/can4.png";
import can5 from "../assets/images/can5.png";
import can7 from "../assets/images/can7.png";
import can8 from "../assets/images/can8.png";
import can9 from "../assets/images/can9.png";
import can10 from "../assets/images/can10.png";

const allProducts = [
  {
    id: 1,
    title: "Mystic Mango Mist",
    discount: 30,
    price: 150,
    description:
      "A tropical escape in every sip, blending sweet mango with a hint of hemp for a dreamy, refreshing mist.",
    image: can1,
    category: "sweet",
  },
  {
    id: 2,
    title: "Sour Citrus Spark",
    discount: 20,
    price: 150,
    description:
      "Zesty lemon and lime collide with a tart hemp twist, sparking your senses with vibrant energy.",
    image: can2,
    category: "sour",
  },
  {
    id: 3,
    title: "Berry Bliss Breeze",
    discount: 20,
    price: 150,
    description:
      "Juicy mixed berries dance with hemp’s earthy notes, delivering a breezy burst of pure bliss.",
    image: can3,
    category: "exotic",
  },
  {
    id: 4,
    title: "Hazy Hibiscus Glow",
    discount: 20,
    price: 150,
    description:
      "Floral hibiscus meets hemp’s subtle haze, creating a glowing sip that’s bold yet serene.",
    image: can4,
    category: "exotic",
  },
  {
    id: 5,
    title: "Pomegranate Pulse",
    discount: 0,
    price: 150,
    description:
      "Rich pomegranate pulses with hemp’s calming vibe, offering a bold, antioxidant-packed refresh.",
    image: can5,
    category: "sweet",
  },
  {
    id: 6,
    title: "Ginger Zen Zing",
    discount: 10,
    price: 150,
    description:
      "Fiery ginger meets hemp’s chill, delivering a zesty zing that soothes and invigorates.",
    image: can7,
    category: "exotic",
  },
  {
    id: 7,
    title: "Pineapple Paradise Haze",
    discount: 10,
    price: 150,
    description:
      "Sweet pineapple and hemp’s hazy touch transport you to a tropical paradise in every sip.",
    image: can7,
    category: "sour",
  },
  {
    id: 8,
    title: "Cucumber Chill Wave",
    discount: 0,
    price: 150,
    description:
      "Crisp cucumber blends with hemp for a cool, refreshing wave that’s pure relaxation.",
    image: can8,
    category: "sweet",
  },
  {
    id: 9,
    title: "Lavender Lush Dream",
    discount: 18,
    price: 150,
    description:
      "Delicate lavender fuses with hemp’s earthy calm, crafting a lush, dreamy escape.",
    image: can9,
    category: "sweet",
  },
  {
    id: 10,
    title: "Spiced Chai Serenity",
    discount: 30,
    price: 150,
    description:
      "Warm chai spices mingle with hemp’s soothing essence, offering serene, spicy bliss.",
    image: can10,
    category: "exotic",
  },
  {
    id: 11,
    title: "Watermelon Whisper",
    discount: 4,
    price: 150,
    description:
      "Juicy watermelon whispers sweet refreshment, laced with hemp’s subtle, calming charm.",
    image: can1,
    category: "sweet",
  },
  {
    id: 12,
    title: "Blueberry Bliss Bomb",
    discount: 0,
    price: 150,
    description:
      "Explosive blueberry flavor meets hemp’s mellow vibe, creating a bold, blissful sip.",
    image: can2,
    category: "exotic",
  },
  {
    id: 13,
    title: "Mint Mojito Muse",
    discount: 0,
    price: 150,
    description:
      "Cool mint and lime inspire a mojito-style muse, infused with hemp’s refreshing twist.",
    image: can3,
    category: "sour",
  },
  {
    id: 14,
    title: "Peach Tranquil Twist",
    discount: 0,
    price: 150,
    description:
      "Velvety peach blends with hemp’s tranquil touch, offering a sweet, soothing escape.",
    image: can4,
    category: "sweet",
  },
  {
    id: 15,
    title: "Raspberry Rasta Road",
    discount: 0,
    price: 150,
    description:
      "Tart raspberry grooves with hemp’s laid-back vibe, paving a vibrant, rasta road.",
    image: can5,
    category: "sweet",
  },
  {
    id: 16,
    title: "Coconut Cloud Nine",
    discount: 0,
    price: 150,
    description:
      "Creamy coconut lifts you to cloud nine, paired with hemp’s smooth, tropical calm.",
    image: can7,
    category: "sweet",
  },
  {
    id: 17,
    title: "Elderflower Euphoria",
    discount: 25,
    price: 150,
    description:
      "Delicate elderflower sparks euphoria, balanced by hemp’s earthy, uplifting fizz.",
    image: can8,
    category: "exotic",
  },
  {
    id: 18,
    title: "Grapefruit Groove",
    discount: 15,
    price: 150,
    description:
      "Tangy grapefruit grooves with hemp’s crisp edge, delivering a funky, refreshing beat.",
    image: can9,
    category: "sour",
  },
  {
    id: 19,
    title: "Passionfruit Pulse",
    discount: 12,
    price: 150,
    description:
      "Vivid passionfruit pulses with hemp’s exotic flair, igniting a tropical spark.",
    image: can10,
    category: "exotic",
  },
  {
    id: 20,
    title: "Blackberry Breeze",
    discount: 8,
    price: 150,
    description:
      "Lush blackberry flows with hemp’s gentle breeze, crafting a bold, berry bliss.",
    image: can1,
    category: "exotic",
  },
  {
    id: 21,
    title: "Blackberry Breeze",
    discount: 0,
    price: 500,
    description:
      "A premium subscription pack of lush blackberry and hemp, delivering bold flavor monthly.",
    image:
      "https://static.wixstatic.com/media/c837a6_425541eb857646d996333177d6811c2b~mv2.jpg/v1/fill/w_696,h_929,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_425541eb857646d996333177d6811c2b~mv2.jpg",
    category: "subscription",
  },
  {
    id: 22,
    title: "Blackberry Breeze",
    discount: 0,
    price: 800,
    description:
      "An exclusive subscription for blackberry-hemp lovers, ensuring a steady, premium supply.",
    image:
      "https://static.wixstatic.com/media/c837a6_774cb84fb198431084c1b2e13fb86353~mv2.jpg/v1/fill/w_696,h_929,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_774cb84fb198431084c1b2e13fb86353~mv2.jpg",
    category: "subscription",
  },
  {
    id: 23,
    title: "Blackberry Breeze",
    discount: 0,
    price: 1000,
    description:
      "The ultimate blackberry-hemp subscription, delivering luxury flavor to your door.",
    image:
      "https://static.wixstatic.com/media/c837a6_05e53a8f90be4c708b68c500fe92fc14~mv2.jpg/v1/fill/w_618,h_825,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_05e53a8f90be4c708b68c500fe92fc14~mv2.jpg",
    category: "subscription",
  },
];

export default allProducts;
