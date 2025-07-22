import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

export default function Login() {
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Card className="w-full max-w-md p-10 rounded-2xl shadow-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify"
          className="h-10 mb-8"
        />
        <h1 className="text-2xl font-bold mb-8 text-white">
          Log in to Spotify
        </h1>
        <div className="w-full flex flex-col gap-3 mb-6">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <g>
                <path
                  fill="#4285F4"
                  d="M44.5 20H24v8.5h11.7C34.7 32.9 29.8 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c2.7 0 5.2.9 7.2 2.5l6.4-6.4C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8.5 19.7-19 0-1.3-.1-2.1-.2-3z"
                />
              </g>
            </svg>
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <g>
                <path
                  fill="#1877F2"
                  d="M24 4C12.9 4 4 12.9 4 24c0 9.9 7.2 18.1 16.6 19.7V30.9h-5v-6.9h5v-5.3c0-5 3-7.7 7.5-7.7 2.2 0 4.5.4 4.5.4v5h-2.5c-2.5 0-3.3 1.6-3.3 3.2v3.8h5.6l-.9 6.9h-4.7v12.8C36.8 42.1 44 33.9 44 24c0-11.1-8.9-20-20-20z"
                />
              </g>
            </svg>
            Continue with Facebook
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M16.365 1.43c-1.5-.1-3.1-.1-4.6 0C7.1 1.6 4.6 3.7 3.7 6.7c-.2.7-.3 1.5-.3 2.3v5.9c0 .8.1 1.6.3 2.3c.9 3 3.4 5.1 6.1 5.3c1.5.1 3.1.1 4.6 0c2.7-.2 5.2-2.3 6.1-5.3c.2-.7.3-1.5.3-2.3V9c0-.8-.1-1.6-.3-2.3c-.9-3-3.4-5.1-6.1-5.3zM12 17.6c-3.1 0-5.6-2.5-5.6-5.6S8.9 6.4 12 6.4s5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6s-1.6-3.6-3.6-3.6z"
              />
            </svg>
            Continue with Apple
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M17.5 2.5a2.5 2.5 0 0 1 2.5 2.5v14a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19V5A2.5 2.5 0 0 1 6.5 2.5h11zm0 1.5h-11A1 1 0 0 0 5 5v14a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5.5 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0 3a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1z"
              />
            </svg>
            Continue with phone number
          </Button>
        </div>
        <div className="w-full flex flex-col gap-3 mb-6">
          <label className="text-sm font-semibold text-white" htmlFor="email">
            Email or username
          </label>
          <Input
            id="email"
            type="text"
            placeholder="Email or username"
            className="bg-neutral-800 text-white"
          />
        </div>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-lg mb-4">
          Continue
        </Button>
        <div className="text-sm text-neutral-400">
          Don't have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Sign up for Spotify
          </a>
        </div>
      </Card>
    </div>
  );
}
