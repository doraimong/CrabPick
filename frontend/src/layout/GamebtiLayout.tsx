import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GamebtiLayout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />
      {/* <h1>hello</h1> */}
      {children}
      <Footer />
    </div>
  );
};

export default GamebtiLayout;
