import Animation from "src/shared/ui/Animation";

interface Props {
  termA: string;
  termB: string;
}

export const ChartsHeader = ({ termA, termB }: Props) => (
  <Animation variant="fade-in" delay={200}>
    <h4 className="mb-8 text-center">
      {termA} vs {termB}
    </h4>
  </Animation>
);
