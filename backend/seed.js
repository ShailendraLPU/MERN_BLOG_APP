const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const arr = [
  {
    user: "Shailendra",
    title: "I-Phone 12",
    about: "ASUSPXYZ02",
    imgurl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    desc: "The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. ... The iPhone 12 is relatively light and easy to handle. iOS 14 has some new customisation options and privacy features. You get two rear cameras - a wide-angle and an ultra-wide-angle one, which both have 12-megapixel sensors.",
  },
  {
    user: "Sobhit",
    title: "Watch",
    about: "ASUSPXYZ02",
    imgurl:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    desc: "The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. ... The iPhone 12 is relatively light and easy to handle. iOS 14 has some new customisation options and privacy features. You get two rear cameras - a wide-angle and an ultra-wide-angle one, which both have 12-megapixel sensors.",
  },
  {
    user: "Shailendra",
    title: "HeadPhone",
    about: "ASUSPXYZ02",
    imgurl:
      "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    desc: "The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. ... The iPhone 12 is relatively light and easy to handle. iOS 14 has some new customisation options and privacy features. You get two rear cameras - a wide-angle and an ultra-wide-angle one, which both have 12-megapixel sensors.",
  },
  {
    user: "Sobhit",
    title: "Cool Bag",
    about: "ASUSPXYZ02",
    imgurl:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    desc: "The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. ... The iPhone 12 is relatively light and easy to handle. iOS 14 has some new customisation options and privacy features. You get two rear cameras - a wide-angle and an ultra-wide-angle one, which both have 12-megapixel sensors.",
  },
];

const seedDB = async () => {
  await Blog.deleteMany();
  await Blog.insertMany(arr);
  console.log("DB seeded");
};

module.exports = seedDB;
