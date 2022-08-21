import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const getUser = async () => {
    setLoading(true);
    const {data} = await axios({
      method: "get",
      url: "http://localhost:5000/user",
      withCredentials: true,
    });
    setUser(data.user);
    setLoading(false);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <userContext.Provider value={{ user, isLoading }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
