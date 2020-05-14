import React from "react";
import ContentHeader from "../ContentHeader";

const Content = ({ children }) => {
  return (
    <div>
      <div class="content-wrapper">
        <ContentHeader />
        {children}
      </div>
    </div>
  );
};

export default Content;
