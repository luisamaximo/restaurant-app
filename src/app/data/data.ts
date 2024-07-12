import { MenuType } from "../types/menuTypes"

export const navs = [
  {
    id: 1,
    name: "Home",
    category: "hero",
    active: true
  },
  {
    id: 2,
    name: "Menu",
    category: "menu",
    active: false
  },
  {
    id: 3,
    name: 'Book a Table',
    target: 'contact',
    active: false,
  }
]

export const filters = [
    {
      id: 1,
      name: "All",
      category: "all",
      active: true
    },
    {
      id: 2,
      name: "Main",
      category: "main",
      active: false
    },
    {
      id: 3,
      name: "Starters",
      category: "starters",
      active: false
    },
    {
      id: 4,
      name: "Salads",
      category: "salads",
      active: false
    },
  ]
  
  export const menu: MenuType = [
    {
      id: 1,
      name: "Mozzarella sticks",
      price: 6.99,
      preview: '/assets/images/menu/MozzarellaSticks.jpeg',
      ingredients: 'Mozzarella cheese sticks coated in Italian breadcrumbs',
      category: "starters",
      description: "Mozzarella cheese sticks coated in Italian breadcrumbs ",
    },
    {
      id: 2,
      name: "Mushroom Risotto",
      price: 12.99,
      preview: '/assets/images/menu/MushroomRisotto.jpeg',
      ingredients: 'Porcini mushrooms, Chestnut mushrooms, Onion, White wine, Arborio rice, Parsley and Grana Padano cheese',
      category: "specialty",
      description: "Porcini mushrooms, Chestnut mushrooms, Onion, White wine, Arborio rice, Parsley and Grana Padano cheese",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 12.99,
      preview: '/assets/images/menu/CaesarSalad.jpeg',
      ingredients: 'Chicken breast, Romaine lettuce, Parmesan cheese, Anchovies and special sauce',
      category: "salads",
      description: "Chicken breast, Romaine lettuce, Parmesan cheese, Anchovies and special sauce",
    },
    {
      id: 4,
      name: "Herb-Crusted Salmon with Lemon Dill Sauce and Aspargus",
      price: 16.99,
      preview: '/assets/images/menu/SalmonDillSauce.jpeg',
      ingredients: 'Salmon, Parsley, Dill, Chives, Panko Breadcrumbs, Lemon zest, Milk and Aspargus',
      category: "main",
      description: "Salmon, Parsley, Dill, Chives, Panko Breadcrumbs, Lemon zest, Milk and Aspargus",
    },
    {
      id: 5,
      name: "Steak and Fries",
      price: 12.99,
      preview: '/assets/images/menu/SteakAndFries.jpeg',
      ingredients: 'Ribeye steak (10-12 ounces), Herbs and Fried Russet fries',
      category: "main",
      description: "Ribeye steak (10-12 ounces), Herbs and Fried Russet fries",
    },
    {
      id: 6,
      name: "Mango Salad",
      price: 10.99,
      preview: '/assets/images/menu/MangoSalad.jpeg',
      ingredients: 'Mango, Baby spinach, Cucumber, Red bell pepper, Shallots, Pomegranate and Fresh herbs',
      category: "salads", 
      description: "Mango, Baby spinach, Cucumber, Red bell pepper, Shallots, Pomegranate and Fresh herbs",
    },
  ]
