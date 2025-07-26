'use client';

import React, { useState } from 'react';

const templates = [
    { id: 1, name: 'SaaS Dashboard', price: 49, image: '/images/templates/dashboard.png', description: 'A modern SaaS dashboard template.' },
    { id: 2, name: 'Portfolio Site', price: 29, image: '/images/templates/portfolio.png', description: 'A clean portfolio template for creatives.' },
    { id: 3, name: 'E-commerce Store', price: 59, image: '/images/templates/ecommerce.png', description: 'A full-featured e-commerce template.' },
    { id: 4, name: 'Landing Page', price: 19, image: '/images/templates/landing.png', description: 'A high-converting landing page template.' },
];

export default function MarketplacePage() {
    const [filter, setFilter] = useState('');
    const filteredTemplates = templates.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">Template Marketplace</h1>
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Search templates..."
                    className="border px-4 py-2 rounded-md w-full max-w-xs"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredTemplates.map(template => (
                    <div key={template.id} className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
                        <img src={template.image} alt={template.name} className="w-full h-40 object-cover rounded mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
                        <p className="text-gray-600 mb-2 text-center">{template.description}</p>
                        <div className="font-bold text-lg mb-4">${template.price}</div>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Purchase</button>
                    </div>
                ))}
            </div>
        </div>
    );
} 