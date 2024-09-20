import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: 'Поиск ответов на все вопросы'
};

const MainLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default MainLayout;