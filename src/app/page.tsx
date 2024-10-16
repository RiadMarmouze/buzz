import MockUp1 from "@public/assets/Images/Common/mock-up1.svg";
import MockUp2 from "@public/assets/Images/Common/mock-up2.svg";
import MockUp3 from "@public/assets/Images/Common/mock-up3.svg";
import MockUp4 from "@public/assets/Images/Common/mock-up4.svg";
import MockUp5 from "@public/assets/Images/Common/mock-up5.svg";
import Facebook from "@public/assets/Icons/Media/facebook.svg";
import Instagram from "@public/assets/Icons/Media/instagram.svg";
import X from "@public/assets/Icons/Media/x.svg";
import LinkedIn from "@public/assets/Icons/Media/linkedin.svg";

import Link from "next/link";
import CustomButton from "./components/CustomButton/CustomButton";
import { FAQ, Testimonial } from "./interfaces";
import GetAppFrom from "./components/GetAppFrom/GetAppFrom";
import FAQCard from "./components/FAQCard/FAQCard";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import NewsletterForm from "./sections/NewsletterForm/NewsletterForm";
export default function Home() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "This app is a game-changer! I booked a cleaning service for my apartment, and the process was seamless. The cleaners arrived on time and did a fantastic job. Highly recommend!",
      imageUrl: "/assets/Images/Testimonials/Pic1.jpg",
      name: "Oussama Aba",
      role: "Business owner",
    },
    {
      id: 2,
      content:
        "I used this app to schedule car maintenance, and I couldn't be happier with the service. The mechanic was professional, and my car has never run better. I’ll definitely be using this app again!",
      imageUrl: "/assets/Images/Testimonials/Pic2.jpg",
      name: "John Carter",
      role: "Business owner",
    },
    {
      id: 3,
      content:
        "I hired an event planner through the app for my birthday party, and they exceeded all my expectations! Everything was perfectly organized, and the whole experience was stress-free.",
      imageUrl: "/assets/Images/Testimonials/Pic3.jpg",
      name: "Sarah Thompson",
      role: "Business owner",
    },
    {
      id: 4,
      content:
        "I scheduled a grooming appointment for my dog using the app, and the experience was fantastic. The groomer was friendly, and my dog looks better than ever! Such a convenient service.",
      imageUrl: "/assets/Images/Testimonials/Pic4.jpg",
      name: "David Kim",
      role: "Business owner",
    },
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do I book a service through the app?",
    },
    {
      id: 2,
      question: "Can I change or cancel my booking after it's been made?",
      answer: {
        profilePic: "/assets/Images/FAQ/Pic1.jpg",
        text: "Yes, you can cancel or reschedule your booking without any hassle",
        details:
          "As long as it’s done up to 24 hours before the scheduled service time. To make changes, simply log in to your account, navigate to the “My Bookings” section in the app, and select the specific booking you’d like to modify. From there, you’ll have the option to either reschedule for a new time or cancel the service entirely. If you need further assistance, our customer support team is available to help guide you through the process.",
      },
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
    },
    {
      id: 4,
      question: "Are the professionals on your platform verified?",
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden py-8 lg:gap-20 lg:py-20">
      <div className="absolute top-0 h-[500px] w-full bg-primary-pink-500 lg:h-[800px]">
        <ul className="flex h-full flex-col justify-end gap-2 p-3 lg:gap-5 lg:p-10">
          <li key={1}>
            <Link
              href="https://www.facebook.com/share/ZjsHnDd8kC6fD99v/?mibextid=qi2Omg"
              passHref
            >
              <Facebook className="w-8 fill-white hover:fill-primary-pink-100 lg:w-12" />
            </Link>
          </li>
          <li key={2}>
            <Link href="https://www.instagram.com/buzz.apex/" passHref>
              <Instagram className="w-8 fill-white hover:fill-primary-pink-100 lg:w-12" />
            </Link>
          </li>
          <li key={3}>
            <Link href="/" passHref>
              <X className="w-8 fill-white hover:fill-primary-pink-100 lg:w-12" />
            </Link>
          </li>
          <li key={4}>
            <Link
              href="https://www.linkedin.com/company/buzz-by-apex/"
              passHref
            >
              <LinkedIn className="w-8 fill-white hover:fill-primary-pink-100 lg:w-12" />
            </Link>
          </li>
        </ul>
      </div>

      {/* home *********************************************************************************************/}
      <section
        id="home"
        className="body-responsive-container flex flex-col items-center gap-8 text-body-bg-primary-light lg:gap-10"
      >
        <h1 className="text-section-title z-10 text-center">
          The Future of Online
          <br />
          Services in Algeria.
        </h1>

        <h2 className="text-description z-10 max-w-[90%] text-center lg:max-w-[55%]">
          First remote digital services provider in Algeria, with{" "}
          <span className="font-semibold">top 10%</span> of digital service
          providers all in <span className="font-semibold">one place.</span>
        </h2>

        <div className="z-10 flex gap-4 lg:hidden">
          <CustomButton
            text="LOG IN"
            variant="filled"
            theme="light"
            raduis="rounded-md lg:rounded-2xl"
            padding="py-3 px-6"
            textSize="text-xs"
            colorTextLight="text-white"
            lightBackgroundColor="bg-primary-pink-700"
            lightBorderHoverColor="hover:border-primary-pink-500"
            colorTextLightHover="hover:text-gray-200"
            lightBackgroundHoverColor="hover:bg-primary-pink-600"
            lightBorderColor="border-primary-pink-500"
            colorTextDark="text-white"
            darkBackgroundColor="bg-primary-pink-800"
            darkBorderColor="border-primary-pink-800"
            colorTextDarkHover="hover:text-gray-400"
            darkBackgroundHoverColor="hover:bg-primary-pink-900"
            darkBorderHoverColor="hover:border-primary-pink-900"
          />
          <CustomButton
            text="SIGN UP"
            variant="filled"
            theme="light"
            raduis="rounded-md lg:rounded-2xl"
            padding="py-3 px-6"
            textSize="text-xs"
            colorTextLight="text-header-bg-primary-light"
            lightBackgroundColor="bg-header-bg-secondary-light"
            lightBorderColor="border-header-title1-text-light"
            colorTextLightHover="hover:text-primary-pink-700"
            lightBackgroundHoverColor="hover:bg-primary-pink-100"
            lightBorderHoverColor="hover:border-primary-pink-500"
            colorTextDark="text-white"
            darkBackgroundColor="bg-primary-pink-800"
            darkBorderColor="border-primary-pink-800"
            colorTextDarkHover="hover:text-gray-400"
            darkBackgroundHoverColor="hover:bg-primary-pink-900"
            darkBorderHoverColor="hover:border-primary-pink-900"
          />
        </div>

        <div className="relative flex w-[70%] flex-row items-center justify-center gap-16 lg:w-full">
          <MockUp1 className="hidden w-[250px] lg:block" />
          <MockUp2 className="block w-full shrink-0 lg:w-[350px]" />
          <MockUp3 className="hidden w-[250px] lg:block" />
        </div>

        <div className="flex w-full gap-8 px-5 lg:w-fit lg:px-0">
          <GetAppFrom />
        </div>
      </section>

      <span id="about" />

      {/* about *********************************************************************************************/}
      <h1 className="text-section-title body-responsive-container text-center">About us</h1>
      <section className="body-responsive-container">
        <div className="flex flex-grow flex-row justify-center gap-5 lg:gap-0">
          <div className="flex flex-shrink-0 flex-row items-center justify-center lg:w-[45%]">
            <MockUp4 className="w-[100px] lg:w-[350px]" />
          </div>
          <div className="flex w-full flex-col justify-evenly gap-2 lg:w-[55%] lg:gap-0">
            <h2 className="text-section-subtitle">Digital Services provider</h2>
            <div className="text-description flex flex-col gap-2 lg:gap-5">
              <p>
                <span className="font-semibold">Buzz</span> is a service based{" "}
                <span className="font-semibold">app</span>, that provide digital
                and non digital services that usually require displacement which
                consumes a lot of{" "}
                <span className="font-semibold">time and effort</span>.
                <br />
              </p>
              <p>
                Using <span className="font-normal">Buzz</span> enables you to
                accomplish your digital needs from the comfort of your home.
                <br />
              </p>
              <p>
                Our staff wil ensure the task to be done and the goods to be
                delivered if need be.
              </p>
            </div>

            <Link href={"/"} passHref>
              <CustomButton
                text="Learn more"
                variant="filled"
                raduis="rounded-md lg:rounded-xl"
                padding="px-2 py-2 lg:px-5 lg:py-3"
                fontWeight="font-bold"
                textSize="text-[10px] lg:text-base"
                theme="light"
                colorTextLight="text-white"
                lightBackgroundColor="bg-primary-pink-500"
                lightBorderHoverColor="hover:border-primary-pink-600"
                colorTextLightHover="hover:text-gray-200"
                lightBackgroundHoverColor="hover:bg-primary-pink-600"
                lightBorderColor="border-primary-pink-500"
                colorTextDark="text-white"
                darkBackgroundColor="bg-primary-pink-800"
                darkBorderColor="border-primary-pink-800"
                colorTextDarkHover="hover:text-gray-400"
                darkBackgroundHoverColor="hover:bg-primary-pink-900"
                darkBorderHoverColor="hover:border-primary-pink-900"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* testimonials *********************************************************************************************/}
      <span id="testimonials" className="relative w-full">
        <span className="shape-decoration-round-left -z-10" />
      </span>
      <div className="body-responsive-container flex flex-col items-center gap-6">
        <h1 className="text-section-title text-center">Testimonials</h1>
        <h2 className="text-description max-w-xs px-5 text-center lg:max-w-4xl">
          Using <span className="font-semibold">Buzz</span> enables you to
          accomplish your digital needs from the comfort of your home.
        </h2>
      </div>
      <section className="body-responsive-container lg:overflow-clip">
        <div className="flex w-fit flex-row gap-5 p-5 max-sm:animate-scrollRight lg:grid lg:grid-cols-2 lg:gap-20">
          {testimonials.map((testimonialData) => (
            <div
              key={testimonialData.id}
              className="w-[calc(100vw-40px)] flex-shrink-0 lg:w-full"
            >
              <TestimonialCard testimonialData={testimonialData} />
            </div>
          ))}
        </div>
      </section>

      {/* faq *********************************************************************************************/}
      <span id="faq" />
      <h1 className="text-section-title body-responsive-container text-center">FAQ’s</h1>
      <section className="body-responsive-container relative flex flex-col gap-5 lg:gap-10 lg:px-[10%]">
        {faqs.map((faqData) => (
          <FAQCard key={faqData.id} faqData={faqData} />
        ))}
      </section>

      <span className="relative w-full">
        <span className="shape-decoration-round-bottom-right -z-10" />
      </span>

      {/* download *********************************************************************************************/}

      <section className="body-responsive-container">
        <div className="flex w-full flex-row justify-between gap-5 lg:gap-40">
          <div className="flex flex-col justify-evenly gap-5 lg:w-[50%] lg:gap-0">
            <h2 className="text-section-title">
              Download <br /> the app
            </h2>

            <p className="text-description">
              Our app is available both on the play store and the app store,
              latest update is here.
            </p>
            <div className="flex w-fit flex-col gap-5 lg:flex-row lg:gap-8">
              <GetAppFrom />
            </div>
          </div>
          <div className="my-auto flex-shrink-0">
            <MockUp5 className="w-[120px] lg:w-[350px]" />
          </div>
        </div>
      </section>

      {/* contact news letter *********************************************************************************************/}
      <span id="contact" />

      <section className="body-responsive-container">
        <div className="flex flex-col gap-8 rounded-2xl bg-primary-pink-500 px-5 py-14 text-white lg:px-20">
          <h2 className="text-title">
            Subscribe to our newsletter to get updated
          </h2>
          <p className="text-paragraph">
            We write weekly personalized newsletters in which we share our
            updates and the lessons we learned from making and maitaining our
            app.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
