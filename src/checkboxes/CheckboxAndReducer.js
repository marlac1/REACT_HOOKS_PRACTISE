import React, { useReducer } from "react";
const CheckboxAndReducer = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <label>
        {checked ? (
          <h5>Thanks! for agreeing to our terms and conditions</h5>
        ) : (
          <h5>Agree to terms and conditions</h5>
        )}
      </label>

      <input
        type="checkbox"
        id="checkbox"
        value={checked}
        onChange={toggle}
      ></input>
    </>
  );
};
export default CheckboxAndReducer;
