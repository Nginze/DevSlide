import React, { useEffect } from "react";

const Callback = () => {
  useEffect(() => {
    if (window.opener.location.pathname === "/") {
      window.opener.location.replace("/home");
    }
    if (window.opener) {
      window.close();
    }
  });
  return (
    <div>
      <div>Redirecting to DevSlide...</div>
    </div>
  );
};

export default Callback;
