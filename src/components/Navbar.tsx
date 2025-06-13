import { ModeToggle } from "@/components/shared/toggle-theme";
import { Button } from '@/components/ui/button';

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'


export default function Navbar() {
    return (
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
                <Button>
                    <SignInButton />
                </Button>
                <Button>
                    <SignUpButton />
                </Button>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <ModeToggle/>
        </header>
    )
}