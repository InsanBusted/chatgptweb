'use client';

import axios from 'axios';
import { useState, FormEvent } from 'react';

export default function Home() {
    // Tambahkan tipe untuk state
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    // Tambahkan tipe untuk event handler
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Tambahkan tipe untuk respons
            const response = await axios.post<{ name: string; email: string }>('/api/users', { name, email });
            console.log('User created:', response.data);
        } catch (err) {
            console.error('Error creating user:', err);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">CREATE USER</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md"
                >
                    Create User
                </button>
            </form>
        </div>
    );
}
