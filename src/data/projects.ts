import { Projects } from '../interfaces/projectInterface'

//icons for the flex list of projects
const zombie = require('../assets/screenshots/zombiemarkt/mockUp.png')
const inventory = require('../assets/screenshots/inventoryManager/mockUp.png')
const rich = require('../assets/screenshots/richSimulator/mockUp.png')
const mockupDelivery = require('../assets/screenshots/deliveryFee/mockUp.png')

//projects screenshots
//zombieMarkt
const zombie1 = require('../assets/screenshots/zombiemarkt/zombie1.png')
const zombie2 = require('../assets/screenshots/zombiemarkt/zombie2.png')
const zombie3 = require('../assets/screenshots/zombiemarkt/zombie3.png')
const zombie4 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/e-commerce/e-commerce_reusable-components.drawio.png'
const zombie5 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/server/createOrder%20flowchart.jpg'
const zombie6 =
  'https://raw.githubusercontent.com/santiagomanso/ZombieMarkt/main/FlowChart-Google-Oauth-20.drawio.png'

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
    descLong: {
      en: 'Humanity is on the verge of extinction, this is the last remaining online shopping platform, a supermarket store. Our drivers can overcome the wave of zombies and bring your products to your home safe and sound.This is one of three applications that makes e-commerce work, the purpose of this app is to register users, create orders and update the stock of products once the order is placed.',
      es: 'La humanidad está al borde de la extinción, esta es la última plataforma de compras online que queda, un supermercado online. Nuestros conductores pueden superar la oleada de zombis y llevar tus productos a casa sanos y salvos. Esta es una de las tres aplicaciones que hacen funcionar el comercio electrónico, la finalidad de esta app es registrar usuarios, crear pedidos y actualizar el stock de productos una vez realizado el pedido.',
      de: 'Die Menschheit ist am Rande des Aussterbens, dies ist die letzte verbleibende Online-Shopping-Plattform, ein Supermarkt. Dies ist eine der drei Anwendungen, die den elektronischen Handel funktionieren lassen. Der Zweck dieser App ist es, Benutzer zu registrieren, Bestellungen zu erstellen und den Bestand an Produkten zu aktualisieren, sobald die Bestellung aufgegeben wurde.',
    },
    urlDemo: 'https://zombie-markt-fj2k.vercel.app/',
    urlCode: 'https://github.com/santiagomanso/ZombieMarkt',
    screenShots: [zombie1, zombie2, zombie3, zombie4, zombie5, zombie6],
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
    descLong: {
      en: 'This is the application that a worker from the warehouse of the zombieMarkt e-commerce would use. The emplployee could inbound product (create / increase stock), outbound procuts (delete / descrease stock) as well as edit any product. I also included suport for the interviewer to see all users, all orders and all products. ',
      es: 'Esta es la aplicación que utilizaría un trabajador del almacén del comercio electrónico zombieMarkt. El empleado podría realizar altas de producto (crear / aumentar stock), bajas de producto (eliminar / reducir stock) así como editar cualquier producto. También incluí soporte para que el entrevistador pudiera ver todos los usuarios, todos los pedidos y todos los productos.',
      de: 'Dies ist die Anwendung, die ein Mitarbeiter aus dem Lager des zombieMarkt e-Commerce verwenden würde. Der Mitarbeiter kann Produkte einliefern (anlegen/erhöhen), Bestellungen ausliefern (löschen/verringern) und jedes Produkt bearbeiten. Ich habe auch die Möglichkeit vorgesehen, dass der Interviewer alle Benutzer, alle Bestellungen und alle Produkte sehen kann.',
    },
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
    descLong: {
      en: "Ever wonder what it would be like to be filthy rich? Well with this application you can pretend you are one of the top 10 richest people on the planet and use that person's money to buy the most expensive assets in the world; buckingham palace? we got it, aircraft carriers? we got it, international space station? we got it. As an extra point, but not a minor one, you will be able to see how many years an average worker in different countries of the world would need to earn a minimum wage; and finally you will be able to see how many people with an average salary combined are needed to match the billionaire you have selected.",
      es: '¿Alguna vez te has preguntado cómo sería ser asquerosamente rico? Pues con esta aplicación podrás fingir que eres una de las 10 personas más ricas del planeta y utilizar el dinero de esa persona para comprar los bienes más caros del mundo; ¿el palacio de buckingham? lo tenemos, ¿portaaviones? lo tenemos, ¿estación espacial internacional? lo tenemos. Como punto extra, pero no menor, podrás ver cuántos años necesitaría un trabajador medio en diferentes países del mundo para ganar un salario mínimo; y por último podrás ver cuántas personas con un salario medio combinado se necesitan para igualar al multimillonario que has seleccionado.',
      de: 'Haben Sie sich jemals gefragt, wie es wäre, stinkreich zu sein? Mit dieser Anwendung können Sie so tun, als wären Sie einer der 10 reichsten Menschen auf dem Planeten, und mit dem Geld dieser Person die teuersten Güter der Welt kaufen: den Buckingham Palast? Als zusätzlichen, aber nicht unbedeutenden Punkt können Sie sehen, wie viele Jahre ein durchschnittlicher Arbeiter in verschiedenen Ländern der Welt braucht, um einen Mindestlohn zu verdienen; und schließlich können Sie sehen, wie viele Menschen mit einem durchschnittlichen Gehalt zusammen benötigt werden, um mit dem Milliardär, den Sie ausgewählt haben, gleichzuziehen.',
    },
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
    descLong: {
      en: 'Do you want to know how big companies charge for delivery service? This application recreates a scenario where the shipping cost depends on multiple factors such as: the price of the shopping cart, the quantity of products and the distance traveled; as an extra point I added a playground section where one can randomly select values to see more quickly different scenarios where the factors previously described influence altering the shipping cost.',
      es: '¿Quieres saber cómo cobran las grandes empresas por el servicio de envío? Esta aplicación recrea un escenario donde el coste de envío depende de múltiples factores como: el precio del carrito de la compra, la cantidad de productos y la distancia recorrida; como punto extra he añadido una sección de juego donde se pueden seleccionar valores aleatoriamente para ver más rápidamente diferentes escenarios donde los factores anteriormente descritos influyen alterando el coste de envío.',
      de: 'Willst du wissen, wie große Unternehmen für den Lieferservice bezahlen? Diese Anwendung stellt ein Szenario nach, in dem die Versandkosten von mehreren Faktoren abhängen, wie z. B. dem Preis des Warenkorbs, der Menge der Produkte und der zurückgelegten Entfernung. Als zusätzlichen Punkt habe ich einen Spielplatzabschnitt hinzugefügt, in dem man zufällig Werte auswählen kann, um schneller verschiedene Szenarien zu sehen, in denen die zuvor beschriebenen Faktoren die Veränderung der Versandkosten beeinflussen.',
    },
    urlDemo: 'https://deliveryfee.netlify.app/',
    urlCode: 'https://github.com/santiagomanso/delivery-fee-calculator',
    screenShots: [deliveryFee1, deliveryFee2, deliveryFee3],
  },
]
