"use client"

import { Link } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"

function AuthButton() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                {session?.user?.name} <br />
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }
    return (
        <>
        Not Signed In <br />
        <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}

export default function NavMenu() {
    return (
        <div>
            <AuthButton/>
        </div>
    )
}