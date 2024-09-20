import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../../shared/header/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container component='main'>{children}</Container>
    </>
  )
}

export default Layout;