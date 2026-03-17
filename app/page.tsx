'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IceCream, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

type MenuItem = {
  name: string;
  price: string;
  desc?: string;
};

type MenuType = {
  [key: string]: MenuItem[];
};

const menu: MenuType = {
  'Ice Cream': [
    { name: 'Classic Vanilla', price: '$4', desc: 'Madagascar vanilla bean.' },
    {
      name: 'Chocolate Fudge',
      price: '$4.5',
      desc: 'Rich chocolate with fudge.',
    },
    { name: 'Cookie & Cream', price: '$4.5' },
    { name: 'Strawberry', price: '$4.5' },
  ],
  Brownies: [
    { name: 'Classic Brownie', price: '$4' },
    { name: 'Walnut Brownie', price: '$4.5' },
    { name: 'Fudge Brownie', price: '$5' },
  ],
  Cookies: [
    { name: 'Chocolate Chip', price: '$3' },
    { name: 'Double Chocolate', price: '$3.5' },
  ],
  Sundaes: [
    { name: 'Hot Fudge Sundae', price: '$9' },
    { name: 'Brownie Blast', price: '$10' },
  ],
  Sauces: [
    { name: 'Caremal', price: '' },
    { name: 'Chocolate', price: '' },
    { name: 'Maple', price: '' },
  ],
  Toppings: [
    { name: 'Chocolate Chips', price: '$0.75' },
    { name: 'Crushed Peanuts', price: '$0.75' },
    { name: 'Rainbow Sprinkles', price: '$1' },
  ],
};

export default function MeltInWebsite() {
  const categories = Object.keys(menu);
  const [active, setActive] = useState(categories[0]);
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between px-8 py-6 border-b border-amber-200">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-amber-900">
          <img src="/Meltin_logo_2.png" width={50} height={50} alt="logo" />{' '}
          Melt In
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

      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6 text-amber-900">
          Artisan Ice Cream
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Warm Brownies. Cold Scoops. Perfect Melt.
        </p>
        <Button className="text-lg px-6 py-5 bg-amber-900 hover:bg-amber-700 text-white">
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

                <div className="mt-4 text-right">
                  <span className="text-lg font-bold text-amber-900">
                    {item.price}
                  </span>
                </div>
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
            <MapPin size={18} /> Mississauga, Canada
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} /> 12PM – 10PM Daily
          </div>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-amber-200 text-gray-600 text-sm">
        © 2026 Melt In. All rights reserved.
      </footer>
    </div>
  );
}
