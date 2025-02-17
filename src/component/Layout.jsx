import React, { useState, useEffect } from 'react';

import bornThisWay from '../assets/born-this-way.jpg'
import artPop from '../assets/artpop.jpeg'
import joanne from '../assets/joanne.jpg'
import mayhem from '../assets/mayhem.jpg'
import aStarIsBorn from '../assets/a-star-is-born.png'
import theFameMonster from '../assets/the-fame-monster.png'
import theFame from '../assets/the-fame.png'
import chromatica from '../assets/chromatica.png'
import harlequin from '../assets/harlequin.png'

const products = [
  {
    id: 1,
    name: 'Born This Way',
    href: '#',
    imageSrc: bornThisWay,
    imageAlt: "Born This Way - Lady Gaga",
    price: '$35',
    releaseYear: '2011',
  },
  {
      id: 2,
      name: 'ArtPop',
      href: '#',
      imageSrc: artPop,
      imageAlt: "ArtPop - Lady Gaga",
      price: '$42',
      releaseYear: '2013',
    },
    {
      id: 3,
      name: 'Joanne',
      href: '#',
      imageSrc: joanne,
      imageAlt: "Joanne - Lady Gaga",
      price: '$59',
      releaseYear: '2016',
    },
    {
      id: 4,
      name: 'Mayhem',
      href: '#',
      imageSrc: mayhem,
      imageAlt: "Mayhem - Lady Gaga",
      price: '$129',
      releaseYear: '2025',
    },
    {
      id: 5,
      name: 'A Star is Born',
      href: '#',
      imageSrc: aStarIsBorn,
      imageAlt: "A Star is Born - Lady Gaga",
      price: '$83',
      releaseYear: '2018',
    },
    {
      id: 6,
      name: 'The Fame Monster',
      href: '#',
      imageSrc: theFameMonster,
      imageAlt: "The Fame Monster - Lady Gaga",
      price: '$27',
      releaseYear: '2009',
    },
    {
      id: 7,
      name: 'The Fame',
      href: '#',
      imageSrc: theFame,
      imageAlt: "The Fame - Lady Gaga",
      price: '$32',
      releaseYear: '2008',
    },
    {
      id: 8,
      name: 'Chromatica',
      href: '#',
      imageSrc: chromatica,
      imageAlt: "Chromatica - Lady Gaga",
      price: '$94',
      releaseYear: '2020',
    },
    {
      id: 9,
      name: 'Harlequin',
      href: '#',
      imageSrc: harlequin,
      imageAlt: "Harlequin - Lady Gaga",
      price: '$69',
      releaseYear: '2024',
    },
];

export default function Layout() {
  const [favorites,setFavorites] = useState([]);

  const toggleFavorite = (id) => {

    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id) 
        : [...prevFavorites, id]; 
      
      return [...updatedFavorites]; 
    });
  };

  return (
      <div className="bg-grey">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lady Gaga Discography</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-grey-700 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.releaseYear}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                <button
                  className="relative z-10 p-2 bg-none appearance-none border-none outline-none cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    toggleFavorite(product.id);
                  }}>
                  {favorites.includes(product.id) ? "❤️" : "🤍"}
              </button>
              </div>
              <div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}