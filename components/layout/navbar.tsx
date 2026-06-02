import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { SignedOut, SignedIn, UserButton } from "@neondatabase/auth/react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-4 px-4">
                <Link href="/" className={"flex items-center gap2 font-semibold tracking-tight text-foreground"}>
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground" aria-hidden>
                        P
                    </span>
                    <span className="text-lg pl-2"> Paoddit </span>
                </Link>
                <div className="relative mx-auto hidden max-w-xl flex-1 md:block">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        readOnly
                        placeholder="Search posts..."
                        className="h-10 w-full rounded-full border-border bg-card pl-10 pr-16 text-sm"
                        aria-label="Search posts"
                    />
                </div>
                <SignedIn>
                    <Link
                        href="/submit"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "hidden sm:inline-flex",
                        )}
                    >
                        Create
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground"
                        aria-label="Notifications"
                    >
                    <Bell className="size-5" />
                    </Button>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className="ml-auto flex items-center gap-2">
                        <Link
                            href={"/auth/login"}
                            className={cn(buttonVariants({ variant: "outline", size: "default" }))}
                        >
                            Login
                        </Link>
                        <Link
                            href={"/auth/sign-up"}
                            className={cn(buttonVariants({ variant: "ghost", size: "default" }))}
                        >
                            Signup
                        </Link>
                    </div>
                </SignedOut>
            </div>
        </header>
    );
}