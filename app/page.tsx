'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IceCream, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

type MenuItem = {
  name: string;
  desc?: string;
};

type MenuType = {
  [key: string]: MenuItem[];
};

const menu: MenuType = {
  'Ice Cream': [
    {
      name: 'Vanilla',
      desc: 'Classic vanilla ice cream made with real vanilla beans.',
    },
    {
      name: 'Dutch Chocolate',
      desc: 'Rich chocolate ice cream with a deep cocoa flavor.',
    },
    {
      name: 'Strawberry & Cream',
      desc: 'Fresh strawberries blended in.',
    },
    {
      name: 'Maple Walnut',
      desc: 'Maple ice cream with crunchy walnut pieces',
    },
    {
      name: 'Cotton Candy',
      desc: 'Sweet cotton candy flavored ice cream',
    },
    {
      name: 'Espresso Flake',
      desc: 'Coffee flavoured ice cream with chocolatey espresso flakes',
    },
    {
      name: 'Pistachio & Almond',
      desc: 'Pistachio flavoured ice cream with almond pieces',
    },
    {
      name: 'Sorbet Rainbow',
      desc: 'Orange, Raspberry and Lime sorbet',
    },
  ],
  Brownies: [
    {
      name: 'Classic Brownie',
      desc: 'A rich, fudgy brownie with a crispy top.',
    },
    {
      name: 'Walnut Brownie',
      desc: 'Brownie infused with crunchy walnuts.',
    },
    {
      name: 'Pistachio Brownie',
      desc: 'Brownie with a hint of pistachio flavor.',
    },
  ],
  Sundaes: [
    {
      name: 'Chocolate Ice Cream Sundae',
      desc: 'Rich chocolate ice cream topped with chocolate sauce.',
    },
    {
      name: 'Caramel Ice Cream Sundae',
      desc: 'Creamy ice cream topped with a drizzle of caramel sauce.',
    },
    {
      name: 'Pistachio Ice Cream Sundae',
      desc: 'Smooth pistachio ice cream topped with pistachio nuts.',
    },
  ],
  Cookies: [
    {
      name: 'Chocolate Chunk',
      desc: 'A rich, fudgy cookie with chunks of real chocolate.',
    },
    {
      name: 'White Chocolate with Nuts',
      desc: 'Delicious white chocolate cookies studded with nuts.',
    },
    {
      name: 'Triple Chocolate',
      desc: 'A chocolate lover’s dream with three types of chocolate.',
    },
  ],

  Sauces: [
    { name: 'Caramel' },
    { name: 'Chocolate' },
    { name: 'Maple Syrup' },
    { name: 'Pistachio' },
  ],
  Toppings: [
    { name: 'Chocolate Chips' },
    { name: 'Rainbow Sprinkles' },
    { name: 'Coconut Flakes' },
    { name: 'Oreo Crumbles' },
    { name: 'Pistachios' },
    { name: 'Chopped Nuts' },
  ],
};

export default function MeltInWebsite() {
  const categories = Object.keys(menu);
  const [active, setActive] = useState(categories[0]);
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between px-8 py-6 border-b border-amber-200">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-amber-900">
          <img src="/Meltin_logo.png" width={50} height={50} alt="logo" />
          Melt In Desserts
        </h1>
        <nav className="flex gap-6 text-sm text-amber-900">
          <a href="#menu" className="hover:text-amber-600">
            Menu
          </a>
          <a href="#gallery" className="hover:text-amber-600">
            Gallery
          </a>
          <a href="#about" className="hover:text-amber-600">
            About
          </a>
          <a href="#visit" className="hover:text-amber-600">
            Visit
          </a>
        </nav>
      </header>

      <section className="text-center bg-[url('/background.jpg')] bg-cover bg-center py-30 px-4">
        <h2 className="text-5xl font-bold mb-6 text-amber-900 text-center">
          The Art of Melting Desserts.
        </h2>
        <p className="text-white-700 font-bold max-w-xl mx-auto mb-8">
          Warm Brownies. Cold Scoops. Perfect Melt.
        </p>
        <Button
          className="text-lg px-6 py-5 bg-amber-900 hover:bg-amber-700 text-white"
          onClick={() => {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Explore Menu
        </Button>
      </section>

      <section id="menu" className="px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-10">
          Our Menu
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-4 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition 
          ${
            active === cat
              ? 'bg-amber-900 text-white'
              : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
          }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menu[active].map((item, i) => (
            <Card
              key={i}
              className="bg-amber-50 border-none rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  )}
                </div>

                {/* <div className="mt-4 text-right">
                  <span className="text-lg font-bold text-amber-900">
                    {item.price}
                  </span>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="px-8 py-20 bg-amber-50">
        <h2 className="text-3xl font-bold mb-10 text-center text-amber-900">
          Ice Cream Gallery
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <img className="rounded-2xl" src="Image1.avif" />
          <img className="rounded-2xl" src="Image2.avif" />
          <img className="rounded-2xl" src="Image3.jpg" />
          <img className="rounded-2xl" src="Image4.avif" />
        </div>
      </section>

      <section id="about" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-amber-900">
          About Melt In
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Melt In is a modern dessert shop focused on delicious flavors, premium
          dairy, and unforgettable brownies and cookies. Every Bite is made
          fresh and designed to melt perfectly.
        </p>
      </section>

      <section id="visit" className="px-8 py-20 bg-amber-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-900">Visit Us</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin size={18} /> 615 Queen St, Toronto, ON M5V 2B6
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />{' '}
            <span>
              12:30 PM - 09:00 PM Weekdays & 12:30 PM - 10:30 PM Weekends
            </span>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-amber-200 text-gray-600 text-sm">
        © 2026 Melt In. All rights reserved.
      </footer>
    </div>
  );
}
