import { Projects } from '../interfaces/projectInterface'

//icons for the flex list of projects
const zombie = require('../assets/screenshots/zombiemarkt/main.png')
const inventory = require('../assets/screenshots/inventoryManager/mockUp.png')
const rich = require('../assets/screenshots/richSimulator/mockUp.png')
const mockupDelivery = require('../assets/screenshots/deliveryFee/mockUp.png')
const vetapp = require('../assets/vetapp.png')
const heroe = require('../assets/heroe.jpg')

//projects screenshots
//valen-img
const zombie1 = require('../assets/screenshots/zombiemarkt/zombie1.png')
const zombie2 = require('../assets/screenshots/zombiemarkt/zombie2.png')
const zombie3 = require('../assets/screenshots/zombiemarkt/zombie3.png')

//inventory manager
const inventory1 = require('../assets/screenshots/inventoryManager/inventoryManager1.png')
const inventory2 = require('../assets/screenshots/inventoryManager/inventoryManager2.png')
const inventory3 = require('../assets/screenshots/inventoryManager/inventoryManager3.png')

//deliveryFee
const deliveryFee1 = require('../assets/screenshots/deliveryFee/deliveryFee1.png')
const deliveryFee2 = require('../assets/screenshots/deliveryFee/deliveryFee2.png')
const deliveryFee3 = require('../assets/screenshots/deliveryFee/deliveryFee3.png')

//quote machine
const rich1 = require('../assets/screenshots/richSimulator/rich1.png')
const rich2 = require('../assets/screenshots/richSimulator/rich2.png')
const rich3 = require('../assets/screenshots/richSimulator/rich3.png')
const rich4 = require('../assets/screenshots/richSimulator/rich4.png')

//array of projects to feed ProjectList and modal components
export const projectsData: Projects = [
  {
    id: 1,
    img: zombie,
    name: 'Zombiemarkt',
    stack: [
      'fullstack',
      'js-cookie',
      'html',
      'css',
      'javascript',
      'react',
      'Tailwind Css',
    ],
    descShort:
      "the zombie apocalypse has arrived, stock up before it's too late. ",
    descLong:
      'This is one of three applications in charge of running my e-commerce. what this app does is authenticate users (signUp / login), display products and provide add to cart support for users, as well as allow one comment as a review on the details of each product; it also gives the user the possibility of seeing his favorite products and how many orders the user has made with our e-commerce. Another key aspect is that this app sends the amount of items in each order alongside the itemQuantity so that the backend app can update the stock of items in the products collection and create a new entry on the Orders collection of my MongoDb database.',
    urlDemo: 'https://zombie-markt-fj2k.vercel.app/',
    urlCode: 'https://github.com/santiagomanso/ZombieMarkt',
    screenShots: [zombie1, zombie2, zombie3],
  },
  {
    id: 2,
    img: inventory,
    name: 'Inventory Manager',
    stack: [
      'tailwind css',
      'fullstack',
      'html',
      'react',
      'mongo db',
      'express',
      'node js',
    ],
    descShort: 'performs CRUD operations with items and stock',
    descLong:
      'This is the application that a worker from the warehouse of the zombieMarkt e-commerce would use. The emplployee could inbound product (create / increase stock), outbound procuts (delete / descrease stock) as well as edit any product. I also included suport for the interviewer to see all users, all orders and all products. ',
    urlDemo: 'https://zombie-markt-gswm.vercel.app/',
    urlCode: 'https://github.com/santiagomanso/ZombieMarkt',
    screenShots: [inventory1, inventory2, inventory3],
  },
  {
    id: 3,
    img: rich,
    name: 'Rich Simulator',
    stack: [
      'multi language',
      'html',
      'css',
      'javascript',
      'react',
      'guest account',
    ],
    descShort: 'Renders a random quote and author made for FreecodeCamp.org',
    descLong:
      "Ever wonder what it would be like to be filthy rich? Well with this application you can pretend you are one of the top 10 richest people on the planet and use that person's money to buy the most expensive assets in the world; buckingham palace? we got it, aircraft carriers? we got it, international space station? we got it. As an extra point, but not a minor one, you will be able to see how many years an average worker in different countries of the world would need to earn a minimum wage; and finally you will be able to see how many people with an average salary combined are needed to match the billionaire you have selected.",
    urlDemo: 'https://rich-simulator.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/rich-commerce',
    screenShots: [rich1, rich2, rich3, rich4],
    video: 'WN44D_yQlXI',
  },
  {
    id: 4,
    img: mockupDelivery,
    name: 'Delivery Fee calculator',
    stack: [
      'multi language',
      'HTML',
      'CSS',
      'tailwind css',
      'react',
      'typescript',
      'css',
      'ract',
    ],
    descShort:
      'Shipping cost calculator made with typescript, React.Js and tailwindCss',
    descLong:
      'Do you want to know how big companies charge for delivery service? This small scale application recreates a scenario where the shipping cost depends on multiple factors such as: the price of the shopping cart, the quantity of products and the distance traveled; as an extra point I added a playground section where one can randomly select values to see more quickly different scenarios where the factors previously described influence altering the shipping cost.',
    urlDemo: 'https://github.com/santiagomanso/delivery-fee-calculator',
    urlCode: 'https://deliveryfee.netlify.app/',
    screenShots: [deliveryFee1, deliveryFee2, deliveryFee3],
  },
  {
    id: 5,
    img: vetapp,
    stack: [
      'node js',
      'react',
      'vanilla css',
      'express',
      'mongo db',
      'responsive design',
      'html',
    ],
    name: 'Vet Appointments',
    descShort: 'Teleclinic for pets! working on...',
    descLong:
      'Example applition that allows users to have multiple pets and be able to schedule appointments with different doctors, built around MERN stack (MongoDB Express React Nodejs) consumes an api where users are related to pets and appointments',
    urlDemo: 'https://dazzling-kleicha-493283.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/vet.app',
    screenShots: [''],
  },
  {
    id: 6,
    img: heroe,
    name: 'Heroes App',
    stack: [
      'bootstrap',
      'responsive design',
      'html',
      'react',
      'mongo db',
      'express',
      'node js',
    ],
    descShort: 'Renders two categories of superheroes.',
    descLong:
      'Superheroes application where i learn to use react-router-dom, animate-css, and i got to practise a bit with javascript array methods filter. Built with React 16 and bootstrap 5, but i schedule myself to update it to react 18 and use tailwind css instead of bootstrap',
    urlDemo: 'https://exquisite-rolypoly-147bef.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/heroes-app',
    screenShots: [''],
  },
]
