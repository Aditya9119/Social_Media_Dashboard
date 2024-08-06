import React, { useEffect, useRef, useState } from "react";
import "../styles/switch.css";

function Switch() {
  const [checked, setChecked] = useState(false);

  const ref = useRef(null);
  function handleChange() {
    console.log(ref.current.checked);
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.callList.remove("is-light-mode");
      document.body.callList.add("is-dark-mode");
    } else {
      document.body.callList.remove("is-dark-mode");
      document.body.callList.add("is-light-mode");
    }
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setChecked(true);
    }
  }, []);

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        type="checkbox"
        className="checkbox"
        checked={checked}
        id="checkbox"
        onChange={handleChange}
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;
