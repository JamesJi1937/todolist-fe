'use client';

import { Product } from '../store/cartStore';
import Link from 'next/link';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              </div>
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            <Link
              href={`/product/${product.id}`}
              className="mt-4 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}