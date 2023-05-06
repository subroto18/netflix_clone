import React from "react";
import { NotFound404 } from "../components/body/404";
import { Header } from "../components/header/Header";

export const Error: React.FC = () => {
  return (
    <>
      <Header />
      <NotFound404 />
    </>
  );
};
