import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useMessage = (id) => {
   const getMessages = async ({id}) => {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:5000/message/${id}`,
      withCredentials: true,
    });
    return data;
  };
const { data: messages , isLoading } = useQuery(["messages", id], () =>
    getMessages({ id })
  );
  return { messages , isLoading };
}

export default useMessage 