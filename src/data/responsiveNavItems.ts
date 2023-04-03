import { navItems } from '../interfaces/navItemsInterface'

export const responsiveNavItems: navItems[] = [
  {
    id: 1,
    icon: 'fa-solid fa-house',
    path: '/',
    text: 'home',
    arrow: '',
    newTab: false,
  },
  {
    id: 2,
    icon: 'fa-solid fa-briefcase',
    path: '/portfolio',
    text: 'portfolio',
    arrow: '',
    newTab: false,
  },
  {
    id: 3,
    icon: 'fa-solid fa-user',
    path: '/about',
    text: 'about',
    arrow: '',
    newTab: false,
  },
  {
    id: 4,
    icon: 'fa-solid fa-file-lines',
    path: '/curriculum',
    text: 'curriculum',
    arrow: '',
    newTab: false,
  },
  {
    id: 5,
    icon: 'fa-brands fa-github',
    path: 'https://github.com/santiagomanso',
    text: 'github',
    arrow: '',
    newTab: true,
  },
  {
    id: 6,
    icon: 'fa-brands fa-linkedin-in',
    path: 'https://www.linkedin.com/in/santimanso/',
    text: 'linked-in',
    arrow: '',
    newTab: true,
  },
]
