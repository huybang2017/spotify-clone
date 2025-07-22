import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

export default function Signup() {
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Card className="w-full max-w-md p-10 rounded-2xl shadow-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify"
          className="h-10 mb-8"
        />
        <h1 className="text-2xl font-bold mb-8 text-white">
          Sign up for Spotify
        </h1>
        <div className="w-full flex flex-col gap-3 mb-6">
          <label className="text-sm font-semibold text-white" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="bg-neutral-800 text-white"
          />
        </div>
        <div className="w-full flex flex-col gap-3 mb-6">
          <label
            className="text-sm font-semibold text-white"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            className="bg-neutral-800 text-white"
          />
        </div>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-lg mb-4">
          Sign Up
        </Button>
        <div className="text-sm text-neutral-400">
          Already have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Log in
          </a>
        </div>
      </Card>
    </div>
  );
}
