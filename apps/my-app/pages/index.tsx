import type { NextPage } from "next";
import { Typography } from "@my-monorepo/ui";
import { AlertIcon } from "@my-monorepo/ui/icons";

const Home: NextPage = () => {
  return (
    <>
      <Typography.Text onClick={() => alert("Hello!")} color="gray50">
        Hello
      </Typography.Text>
      <AlertIcon />
    </>
  );
};

export default Home;
