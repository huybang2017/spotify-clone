import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Signup() {
  return (
    <div className="min-w-full min-h-screen flex flex-col justify-center items-center bg-black">
      <div className="w-full max-w-md px-8 py-10 flex flex-col items-center">
        {/* Logo Spotify */}
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="Spotify"
          className="h-10 mb-10"
        />

        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Sign up to
        </h1>
        <h1 className="text-4xl font-bold mb-12 text-white text-center">
          start listening
        </h1>

        {/* Email input form */}
        <div className="w-full flex flex-col gap-2 mb-6">
          <label className="text-sm font-normal text-white" htmlFor="email">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="name@domain.com"
            className="bg-[#121212] text-white border-neutral-700 py-6 px-4"
          />
          <div className="mt-2">
            <a href="#" className="text-[#1ed760] text-sm hover:underline">
              Use phone number instead.
            </a>
          </div>
        </div>

        {/* Next Button */}
        <div className="w-full mb-6">
          <Button className="w-full bg-[#1ed760] hover:bg-[#1db954] hover:scale-105 text-black font-bold text-base py-6 rounded-full">
            Next
          </Button>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-neutral-700 relative mb-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4">
            <span className="text-neutral-400 font-medium">or</span>
          </div>
        </div>

        {/* Social signup buttons */}
        <div className="w-full flex flex-col gap-3 mb-8">
          <Button
            variant="outline"
            className="w-full flex items-center gap-3 justify-center py-3 border-neutral-500 hover:border-white relative"
          >
            <div className="absolute left-4">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                />
                <path
                  fill="#34A853"
                  d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970244 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                />
              </svg>
            </div>
            <span className="font-medium">Sign up with Google</span>
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center gap-3 justify-center py-3 border-neutral-500 hover:border-white relative"
          >
            <div className="absolute left-4">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M14.5504 5.03916C15.5139 4.02841 16.1529 2.59047 16.1529 1.16541C16.1529 1.04097 16.1418 0.920969 16.1227 0.799805C14.7933 0.832329 13.2646 1.56589 12.2069 2.65637C11.3311 3.49791 10.5388 4.91085 10.5388 6.35799C10.5388 6.49662 10.5572 6.63525 10.5664 6.66321C10.6357 6.67155 10.7418 6.68545 10.8479 6.68545C12.0497 6.68545 13.5012 5.98141 14.5504 5.03916ZM19.3532 17.0245C19.3532 17.0523 19.3532 17.0754 19.3532 17.1032C19.3532 19.1024 18.3961 21.0321 17.2905 22.1864C16.3366 23.2082 15.2182 24.0003 13.9023 24.0003C12.6292 24.0003 11.8679 23.4863 10.9878 23.0251C10.0379 22.5313 9.0072 22.0005 7.4626 22.0005C5.83153 22.0005 4.7218 22.5428 3.66624 23.0559C2.81668 23.4724 2.00025 23.869 1.01721 23.869C0.942732 23.869 0.871528 23.8634 0.801551 23.8551C0.447391 23.808 0.116805 23.6406 -0.100018 23.3702C-0.312144 23.1054 -0.418928 22.7705 -0.394216 22.4329C0.0649804 15.6472 4.70686 12.8617 7.35652 12.8617C8.48955 12.8617 9.34827 13.3386 10.1029 13.7554C10.7479 14.1167 11.3098 14.4378 12.0984 14.4378C12.8274 14.4378 13.3833 14.1099 14.0205 13.7446C14.8153 13.2865 15.7591 12.7399 17.0228 12.7399C18.0721 12.7399 19.3532 13.1291 19.3532 17.0245Z"
                />
              </svg>
            </div>
            <span className="font-medium">Sign up with Apple</span>
          </Button>
        </div>

        {/* Login link */}
        <div className="text-base mb-6 text-center">
          <span className="text-neutral-400">Already have an account?</span>{" "}
          <a href="/login" className="text-[#1ed760] hover:underline">
            Log in here
          </a>
          <span className="text-neutral-400">.</span>
        </div>

        {/* Footer */}
        <div className="text-xs text-neutral-400 text-center mt-8">
          <p>This site is protected by reCAPTCHA and the Google</p>
          <p>
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
