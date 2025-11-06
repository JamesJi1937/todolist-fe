'use client';

import Header from '../../components/Header';
import { useCartStore } from '../../store/cartStore';

export default function CartPage() {
  const { items, removeItem, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600">Add some products to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                {items.map((item) => (
                  <div key={item.product.id} className="p-4 border-b last:border-b-0">
                    <div className="flex items-center gap-4">
                      <div className="h-24 w-24 overflow-hidden rounded-md">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{item.product.name}</h3>
                            <p className="text-sm text-gray-500">{item.product.category}</p>
                          </div>
                          <span className="text-lg font-bold">${item.product.price.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Quantity:</span>
                            <span className="text-sm font-medium">{item.quantity}</span>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-sm text-red-600 hover:text-red-800 font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Total Items:</span>
                  <span className="font-medium">{items.reduce((total, item) => total + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-900">Total Price:</span>
                  <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}