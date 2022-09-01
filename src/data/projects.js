import quote from '../assets/quote.png'
import inventory from '../assets/inventory.png'
import page1 from '../assets/page1.png'
import tasks from '../assets/tasks.png'
import vetapp from '../assets/vetapp.png'
import heroe from '../assets/heroe.jpg'

export const projectsData = [
  {
    id: 1,
    img: page1,
    name: 'valen-img',
    stack: [
      'html',
      'css',
      'javascript',
      'react',
      'responsive design',
      'swiper js',
      'framer motion',
    ],
    descShort: 'Photographer personal site',
    descLong:
      'Landing page built with React and Vanilla CSS for a berlin based photographer. Features 3 different categories of albums (animated with framer motion) he liked, that when ever an album gets clicked a modal pops up with a carousel (swiper js) of pictures',
    urlDemo: 'https://www.valen-img.com/',
    urlCode: 'https://github.com/santiagomanso/ValentinLallanaPH',
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
  },
]
