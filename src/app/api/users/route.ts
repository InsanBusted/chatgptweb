import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Sambungkan ke database
        await connectionToDatabase();

        // Parsing JSON dari request
        const { name, email }: { name: string; email: string } = await request.json();

        // Membuat user baru menggunakan model Mongoose
        const newUser = new User({ name, email });

        // Menyimpan user ke database
        await newUser.save();

        // Mengembalikan response dengan data user baru
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        // Log kesalahan
        console.error("Error creating user:", err);

        // Mengembalikan response error
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
