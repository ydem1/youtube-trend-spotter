import React from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "src/app/config/projectName";
import { PATHNAMES } from "src/app/config/routes";
import Animation from "src/shared/ui/Animation";
import { Button } from "src/shared/ui/Button";
import heroImg from "/images/hero/2.png";

export const Hero = () => (
  <section className="container flex flex-col items-center justify-center gap-12 py-12 md:gap-20 md:py-20">
    <div className="flex flex-col items-center gap-8">
      <Animation variant="slide-bottom">
        <h1 className="text-center">
          Compare YouTube Trends &{" "}
          <span className="text-primary"> Pick the Best Topic</span>
        </h1>
      </Animation>

      <Animation variant="slide-bottom" delay={500}>
        <p className="max-w-[800px] text-center text-default">
          {APP_NAME} helps content creators analyze YouTube topics side by side
          — compare views, likes, and popularity over time. Discover which idea
          will make your next video go viral!
        </p>
      </Animation>

      <div className="flex items-center justify-center gap-10">
        <Animation variant="slide-left" delay={200}>
          <Link to={PATHNAMES.COMPARE}>
            <Button color="primary" variant="solid">
              Start Comparing
            </Button>
          </Link>
        </Animation>

        <Animation variant="slide-right" delay={400}>
          <Link to={PATHNAMES.ABOUT}>
            <Button color="default" variant="outline">
              Learn More
            </Button>
          </Link>
        </Animation>
      </div>
    </div>

    <div className="max-w-4xl">
      <img
        className="h-full w-full rounded-2xl object-cover opacity-0 transition-opacity duration-700"
        src={heroImg}
        alt={APP_NAME}
        loading="eager"
        onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
      />
    </div>
  </section>
);
