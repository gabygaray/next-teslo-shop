import React, { PropsWithChildren } from "react";

import Head from "next/head";
import { Box } from "@mui/material";

interface Props {
  title: string;
}

export const AuthLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
