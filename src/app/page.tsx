import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-t from-gray-900 via-gray-100 to-gray-900">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with my PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-2 text-lg text-slate-600">
            Unlock the power of AI alongside millions of students, researchers,
            and professionals. Instantly answer questions and gain deep insights
            into research materials with our innovative platform.
          </p>

          <div className="w-full mt-4">
            {isAuth ? (<h1>File Upload</h1>):(
              <Link href="/sign-in">
              <Button>Log in to get started
                <LogIn className="w-4 h-4 ml-2"/>
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
