import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css"; // Ensure global styles are imported
import CustomButton from "./components/CustomButton/CustomButton";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center">
      <div className="body-responsive-container w-full py-10 lg:py-20">
        <div className="flex flex-col items-center space-y-6">
          {/* SVG Image */}
          <div className="flex h-auto w-full max-w-xs justify-center">
            <Image
              src="/assets/Images/Common/404.svg" // Place your SVG file in the public folder
              alt="404 Not Found"
              width={200}
              height={200}
            />
          </div>

          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-error">
              Oops! The page you&apos;re looking for doesn&apos;t exist.
            </h1>
            <p className="text-info mt-4">
              You may have mistyped the address, or the page has been moved.
            </p>
          </div>

          {/* Button */}
          <Link href="/" passHref>
            <CustomButton
              text="Go to Home"
              variant="filled"
              theme="light"
              colorTextLight="text-white"
              colorTextDark="text-white"
              colorTextLightHover="hover:text-gray-200"
              colorTextDarkHover="hover:text-gray-400"
              lightBackgroundColor="bg-primary-pink-500"
              darkBackgroundColor="bg-primary-pink-800"
              lightBackgroundHoverColor="hover:bg-primary-pink-600"
              darkBackgroundHoverColor="hover:bg-primary-pink-900"
              lightBorderColor="border-primary-pink-500"
              darkBorderColor="border-primary-pink-800"
              lightBorderHoverColor="hover:border-primary-pink-600"
              darkBorderHoverColor="hover:border-primary-pink-900"
              raduis="rounded-md lg:rounded-2xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
