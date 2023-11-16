import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>PNFLIEX | {titleName}</title>
    </Helmet>
  );
};
