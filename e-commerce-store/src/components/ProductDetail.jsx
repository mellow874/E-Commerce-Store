// src/components/ProductDetail.jsx
import React from "react";

export default function ProductDetail({ product, onAdd }) {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold mb-6">${product.price}</p>
                    <button
                        onClick={onAdd}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
