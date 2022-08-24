import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useChat = id => {
  const getChats = async ({ id }) => {
    const { data } = await axios({
      method: "get",
      url: id === 111935441 ? `http://localhost:5000/chat/r/${id}` : `http://localhost:5000/chat/d/${id}`,
      withCredentials: true
    });
    return data;
  };
  const { data: chats, isLoading } = useQuery(["chats", id], () =>
    getChats({ id })
  );
  return { chats, isLoading };
};

export default useChat;
