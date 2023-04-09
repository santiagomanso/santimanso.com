import { Projects } from '../interfaces/projectInterface'

//icons for the flex list of projects
const quote = require('../assets/quote.png')
const inventory = require('../assets/screenshots/inventoryManager/mainInventoryManager.png')

const tasks = require('../assets/tasks.png')
const vetapp = require('../assets/vetapp.png')
const heroe = require('../assets/heroe.jpg')

//projects screenshots
//valen-img
const valen1 = require('../assets/screenshots/valen/valen1.png')
const valen2 = require('../assets/screenshots/valen/valen2.png')
const valen3 = require('../assets/screenshots/valen/valen3.png')
const valen4 = require('../assets/screenshots/valen/valen4.png')

//inventory manager
const inventory1 = require('../assets/screenshots/inventoryManager/inventoryManager1.png')
const inventory2 = require('../assets/screenshots/inventoryManager/inventoryManager2.png')
const inventory3 = require('../assets/screenshots/inventoryManager/inventoryManager3.png')

//quote machine
const quote1 = require('../assets/screenshots/quote/quote1.png')
const quote2 = require('../assets/screenshots/quote/quote2.png')

//array of projects to feed ProjectList and modal components
export const projectsData: Projects = [
  {
    id: 1,
    img: 'https://i.ibb.co/Kx9prWv/main-Screenshot.png',
    name: 'Zombiemarkt',
    stack: [
      'axios',
      'js-cookie',
      'html',
      'css',
      'javascript',
      'react',
      'Tailwind Css',
      'React Router Dom',
    ],
    descShort:
      "the zombie apocalypse has arrived, stock up before it's too late. ",
    descLong:
      'This is one of three applications in charge of running my e-commerce. what this app does is authenticate users (signUp / login), display products and provide add to cart support for users, as well as allow one comment as a review on the details of each product; it also gives the user the possibility of seeing his favorite products and how many orders the user has made with our e-commerce. Another key aspect is that this app sends the amount of items in each order alongside the itemQuantity so that the backend app can update the stock of items in the products collection and create a new entry on the Orders collection of my MongoDb database.',
    urlDemo: 'https://www.valen-img.com/',
    urlCode: 'https://github.com/santiagomanso/ValentinLallanaPH',
    screenShots: [valen1, valen2, valen3, valen4],
  },
  {
    id: 2,
    img: inventory,
    name: 'Inventory Manager',
    stack: [
      'tailwind css',
      'responsive design',
      'html',
      'react',
      'mongo db',
      'express',
      'node js',
    ],
    descShort: 'performs CRUD operations with items and stock',
    descLong:
      'This is the application that a worker from the warehouse of the zombieMarkt e-commerce would use. The emplployee could inbound product (create / increase stock), outbound procuts (delete / descrease stock) as well as edit any product. I also included suport for the interviewer to see all users, all orders and all products. ',
    urlDemo: 'https://inventory.santimanso.com/',
    urlCode: 'https://github.com/santiagomanso/inventory',
    screenShots: [inventory1, inventory2, inventory3],
  },
  {
    id: 3,
    img: quote,
    name: 'Rich Simulator',
    stack: ['html', 'css', 'javascript', 'react', 'responsive design'],
    descShort: 'Renders a random quote and author made for FreecodeCamp.org',
    descLong: 'Ever feel how would it feel like to be fil',
    urlDemo: 'https://lambent-mandazi-599f73.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/random-quote-generator',
    screenShots: [quote1, quote2],
  },
  {
    id: 4,
    img: tasks,
    name: 'MERN Tasks',
    stack: [
      'html',
      'react-bootstrap',
      'responsive design',
      'mongo db',
      'express',
      'css',
      'ract',
      'react-bootstrap',
    ],
    descShort: 'To-do list made with react, mongoDB, express and node.',
    descLong:
      'Frontend application that consumes its own REST API made with MongoDB where an user is bound to Projects and multiple tasks that each project has',
    urlDemo: 'https://unrivaled-faloodeh-b0ddb1.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/merntasks-client',
    screenShots: [quote1, quote2],
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
    screenShots: [quote1, quote2],
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
    screenShots: [quote1, quote2],
  },
]
