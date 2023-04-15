import { Projects } from '../interfaces/projectInterface'

//icons for the flex list of projects
const zombie = require('../assets/screenshots/zombiemarkt/mockUp.png')
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
      'authentication',
      'html',
      'css',
      'javascript',
      'react',
      'Tailwind Css',
    ],
    descShort:
      "the zombie apocalypse has arrived, stock up before it's too late. ",
    descLong:
      'Humanity is on the verge of extinction, this is the last remaining online shopping platform, a supermarket store. Our drivers can overcome the wave of zombies and bring your products to your home safe and sound.This is one of three applications that makes e-commerce work, the purpose of this app is to register users, create orders and update the stock of products once the order is placed.',
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
      'typescript',
      'javascript',
      'HTML',
      'CSS',
      'tailwind css',
      'react',
      'css',
    ],
    descShort:
      'Shipping cost calculator made with typescript, React.Js and tailwindCss',
    descLong:
      'Do you want to know how big companies charge for delivery service? This small scale application recreates a scenario where the shipping cost depends on multiple factors such as: the price of the shopping cart, the quantity of products and the distance traveled; as an extra point I added a playground section where one can randomly select values to see more quickly different scenarios where the factors previously described influence altering the shipping cost.',
    urlDemo: 'https://github.com/santiagomanso/delivery-fee-calculator',
    urlCode: 'https://deliveryfee.netlify.app/',
    screenShots: [deliveryFee1, deliveryFee2, deliveryFee3],
  },
]
