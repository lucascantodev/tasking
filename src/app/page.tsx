import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="grid grid-cols-12 border border-red-500 min-h-screen">
      <div className="col-span-6 flex flex-col justify-center items-center gap-7">
        <h1 className="text-4xl font-bold animate-fadeIn">TasKing</h1>
        <p className="text-xl animate-fadeIn">Prioritize your world with tasks</p>
      </div>
      <div className="col-span-6 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-4xl font-medium mb-6">Login</h1>
        <div className="w-72">
          <label htmlFor="email" className="font-semibold text-sm">Email:</label>
          <Input id="email" placeholder="E-mail" type="email" className="border-[#FFFFFF] h-9  bg-black" />
        </div>
        <div className="w-72">
          <label htmlFor="senha" className="font-semibold text-sm">Password:</label>
          <Input id="password" placeholder="Password" type="password" className="border-[#FFFFFF] h-9  bg-black" />
        </div>
        <div className="w-full">
          <Button>Sign In</Button>
        </div>
        <div className="w-full">
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}
