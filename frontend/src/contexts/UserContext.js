import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const getUser = async () => {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:5000/user",
      withCredentials: true,
    });
    return data.user;
  };
  
  const { data: user, loading } = useQuery(["user"],() =>  getUser());

  return (
    <userContext.Provider value={{ user, loading }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
