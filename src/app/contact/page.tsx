'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, company, email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error('Failed to submit form');

      setSuccess(true);
      setName('');
      setCompany('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-semibold mb-4">Get In Touch</h1>
        <p className="text-gray-600 text-lg">
          This is a space to welcome visitors to the site. Grab their attention
          with copy that clearly states what the site is about, and add an
          engaging image or video.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white shadow-md p-8 rounded-md">
        {success ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-md text-sm mb-4">
            Your message has been sent!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 border px-4 py-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="w-1/2 border px-4 py-2 rounded-md"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Message"
              className="w-full border px-4 py-2 rounded-md"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}