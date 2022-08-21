const handleDeveloperLogin = () => {
  const BACKEND_URI = "http://localhost:5000";
  const width = 600;
  const height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;
  window.open(
    BACKEND_URI + "/auth/github",
    "",
    `toolbar=no, location=no, directories=no, status=no, menubar=no, 
  scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
  height=${height}, top=${top}, left=${left}`
  );

};

const handleRecruiterLogin = () => {
  const BACKEND_URI = "http://localhost:5000";
  const width = 600;
  const height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;
  window.open(
    BACKEND_URI + "/auth/github",
    "",
    `toolbar=no, location=no, directories=no, status=no, menubar=no, 
  scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
  height=${height}, top=${top}, left=${left}`
  );
};

export {handleDeveloperLogin, handleRecruiterLogin}
