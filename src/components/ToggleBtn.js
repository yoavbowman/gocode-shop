import { useState } from "react";

const ToggleBtn = () => {
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={toggle}>toggle</button>
      {show && <h1> WAZZZZZZZZAAAAPP</h1>}
    </>
  );
};
export default ToggleBtn;
