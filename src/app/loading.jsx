import React from "react";
import { HashLoader } from "react-spinners";

const loadingPage = () => {
  return (
    <div className="container mx-auto py-10 ">
      <HashLoader className="mx-auto" color='#3498db' />
    </div>
  );
};

export default loadingPage;
