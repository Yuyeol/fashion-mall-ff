import React, { useState } from "react";

const LookBookDetail = (props) => {
  console.log(props);
  const [lookbook, setLookbook] = useState([]);
  const {
    match: {
      params: { id },
    },
  } = props;
  return <>fdsf</>;
};

export default LookBookDetail;
