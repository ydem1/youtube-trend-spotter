import { FormProvider } from "react-hook-form";
import Animation from "src/shared/ui/Animation";
import { Button } from "src/shared/ui/Button";
import { Input } from "src/shared/ui/FormField/Input";
import { SplitHeading } from "src/shared/ui/SplitHeading";
import { useCompareForm } from "../model/hooks";

export const CompareForm = () => {
  const { methods, onSubmit, isLoading } = useCompareForm();

  return (
    <section className="container flex flex-col items-center justify-center gap-12 py-12 md:gap-20 md:py-24">
      <Animation variant="slide-bottom" delay={200}>
        <SplitHeading
          text="YouTube Trend Spotter"
          as="h2"
          className="text-center text-3xl font-semibold text-default md:text-5xl"
        />
        <p className="mt-3 text-center text-sm text-default/70 md:text-base">
          Compare the popularity of two topics and discover what’s trending.
        </p>
      </Animation>

      <Animation className="w-full max-w-2xl" variant="slide-right" delay={700}>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="relative w-full rounded-30 border border-primary/10 bg-gradient-to-br from-widget to-background/90 p-10 shadow-primary-glow backdrop-blur-md transition-all duration-500 hover:shadow-primary-glow-hover"
          >
            <div className="pointer-events-none absolute inset-0 rounded-30 bg-gradient-to-tr from-primary/10 to-transparent" />

            <div className="relative space-y-6">
              <Input
                name="termA"
                label="First topic"
                placeholder="e.g. AI tutorials"
              />
              <Input
                name="termB"
                label="Second topic"
                placeholder="e.g. Web development"
              />

              <Button
                type="submit"
                color="primary"
                variant="solid"
                className="w-full rounded-xl py-3.5 text-base font-medium tracking-wide transition-transform hover:scale-[1.02]"
                isLoading={isLoading}
              >
                Compare
              </Button>
            </div>
          </form>
        </FormProvider>
      </Animation>
    </section>
  );
};
