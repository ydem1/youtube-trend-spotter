import { FC } from "react";
import { PageWrapper } from "src/app/layout/PageWrapper";
import { HistoryList } from "src/entities/trend";

const History: FC = () => (
  <PageWrapper>
    <HistoryList />
  </PageWrapper>
);

export default History;
