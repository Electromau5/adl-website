'use client';

import React, { useState } from 'react';

export default function DesignSystemLicensePage() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
    };

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6 text-center">Purchase Design System License</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Unlock our comprehensive Design System for your team. Get access to a robust set of components, documentation, and ongoing updates.
            </p>
            <div className="bg-white shadow rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-2">What&apos;s Included</h2>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                    <li>Full Figma file & codebase</li>
                    <li>Reusable React components</li>
                    <li>Extensive documentation</li>
                    <li>Lifetime updates</li>
                    <li>Commercial use license</li>
                </ul>
                <div className="text-2xl font-bold mb-2">$299</div>
                <div className="text-gray-500 mb-4">One-time payment per team</div>
                {success ? (
                    <div className="bg-green-50 text-green-700 p-4 rounded-md text-sm">Thank you! We&apos;ll contact you soon.</div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="border px-4 py-2 rounded-md"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                            Purchase License
                        </button>
                    </form>
                )}
            </div>
            <div className="text-sm text-gray-500 text-center">
                Need a custom license or have questions? <a href="/contact" className="underline">Contact us</a>.
            </div>
        </div>
    );
} 