import React, { useState } from "react";

function PasswordInterface() {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <input
        type={isVisible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{password}</p>
      {/* user jo input k andar type krega wo password state k andar store hoga  */}

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}{" "}
      </button>
      {/* / /toggling logic  */}

      {password !== "" && (
        <button onClick={() => setPassword("")}>Clear</button>
      )}
      {/* clear button dikhega if something typed else not visible
       */}
    </>
  );
}
export default PasswordInterface;
