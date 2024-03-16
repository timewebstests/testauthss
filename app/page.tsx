import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';
import Image from 'next/image';


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})



export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5889d1] to-[#0c2f62]">
      <div className="space-y-6 text-center">
        <h1 className='text-6xl text-blue-300 font-bold'>
          SerenitySets
        </h1>
        <p className="text-xl text-white font-semibold">
          Authentication
        </p>
        <div>
          <LoginButton>
            <Button variant="outline" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
