'use client';

import { useParams } from 'next/navigation';
import { mockProducts } from '../../../data/mockProducts';
import { useCartStore } from '../../../store/cartStore';
import Header from '../../../components/Header';
import { Product } from '../../../store/cartStore';

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = mockProducts.find((p) => p.id === id) as Product;
  const { addItem } = useCartStore();

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[400px] overflow-hidden rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              </div>
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <button
              onClick={() => addItem(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}