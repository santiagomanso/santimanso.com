import { Projects } from '../interfaces/projectInterface'

//icons for the flex list of projects
const quote = require('../assets/quote.png')
const inventory = require('../assets/inventory.png')
const page1 = require('../assets/page1.png')
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
const inventory1 = require('../assets/screenshots/inventory/inventory1.png')
const inventory2 = require('../assets/screenshots/inventory/inventory2.png')
const inventory3 = require('../assets/screenshots/inventory/inventory3.png')
const inventory4 = require('../assets/screenshots/inventory/inventory4.png')
const inventory5 = require('../assets/screenshots/inventory/inventory5.png')
const inventory6 = require('../assets/screenshots/inventory/inventory6.png')

//quote machine
const quote1 = require('../assets/screenshots/quote/quote1.png')
const quote2 = require('../assets/screenshots/quote/quote2.png')

//array of projects to feed ProjectList and modal components
export const projectsData: Projects = [
  {
    id: 1,
    img: page1,
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
      "This application is one of the two frontend applications running this e-commerce, conformed by two frontend applications and a backend application made with express in node.js. The end user of this app is a customer that will be able to add products to the shopping cart, make favorite products that the user wants, as well as leave comments on the product detail page. The application interacts with the backend creating an entry in the order collection, creating an order; at the same time and in the same controller updates the stock of the products (all products) that are part of the customer's order. The application works in react and has its own oauth protocol that allows to create users and login, it is deployed in vercel and for some reason that I don't know yet I can't work according to the sending of cookies from the backend to the frontend in vercel (in localhost if the res.cookie function works)",
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
      'In this application i used MERN stack (MongoDB Express React Nodejs) to build an application clone of the one that i used when i worked at GoFlink in Berlin, germany. I tested with a zebra phone scanner and was able to scann products and perform create update delete operations with pre-stablished items on its own API REST',
    urlDemo: 'https://inventory.santimanso.com/',
    urlCode: 'https://github.com/santiagomanso/inventory',
    screenShots: [
      inventory1,
      inventory2,
      inventory3,
      inventory4,
      inventory5,
      inventory6,
    ],
  },
  {
    id: 3,
    img: quote,
    name: 'Quote Machine',
    stack: ['html', 'css', 'javascript', 'react', 'responsive design'],
    descShort: 'Renders a random quote and author made for FreecodeCamp.org',
    descLong:
      'one final project from FreeCodeCamp.org that displays a random quote and author from two arrays, scheduled to upgrade to Tailwind Css',
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
