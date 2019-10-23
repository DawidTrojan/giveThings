import React from "react";
import Bar from "./Bar";
import Form from "./Form";

const FirstStep = ({ next }) => {
  return (
    <div>
      <Bar />
      <Form next={next} />
    </div>
  );
};

export default FirstStep;