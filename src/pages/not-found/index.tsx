import React from "react";
import { Link } from "react-router-dom";
import { PATHNAMES } from "src/app/config/routes";
import { PageWrapper } from "src/app/layout/PageWrapper";
import Animation from "src/shared/ui/Animation";
import { Button } from "src/shared/ui/Button";
import { SplitHeading } from "src/shared/ui/SplitHeading";

const NotFoundPage = () => (
  <PageWrapper isShownFooter={false}>
    <section className="container flex h-full flex-col items-center justify-center gap-10 py-10 text-center lg:py-20 xl:py-32">
      <Animation variant="slide-bottom" delay={200}>
        <SplitHeading text="Page not found" as="h2" />
      </Animation>

      <Animation variant="slide-bottom" delay={400}>
        <p className="mx-auto max-w-xl">
          The page you’re looking for doesn’t exist or has been moved.
          <br />
          Please check the URL or return to the homepage.
        </p>
      </Animation>

      <Animation variant="slide-top" delay={600}>
        <Link to={PATHNAMES.HOME}>
          <Button color="primary" variant="solid">
            Go back home
          </Button>
        </Link>
      </Animation>
    </section>
  </PageWrapper>
);

export default NotFoundPage;
