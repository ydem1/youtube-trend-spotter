import React, { FC } from "react";
import { PageWrapper } from "src/app/layout/PageWrapper";
import { Charts } from "src/entities/trend";
import { CompareForm } from "src/features/compare";

const Compare: FC = () => (
  <PageWrapper>
    <CompareForm />
    <Charts />
  </PageWrapper>
);

export default Compare;
