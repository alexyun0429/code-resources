import React from "react";

const HidePassword = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        placeholder="Enter password"
      />
      <button onClick={togglePasswordVisibility}>
        {passwordVisible ? "Hide" : "Show"} Password
      </button>
    </div>
  );
};

export default HidePassword;
