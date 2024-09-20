'use client'

import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import Layout from "./Layout";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Toaster position="bottom-left" theme="dark" />

      <Layout>
        {children}
      </Layout>
    </>
  );
};

export default Providers;