import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useNotiifications = (id) => {
   const getNotifications = async ({id}) => {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:5000/activity/${id}`,
      withCredentials: true,
    });
    return data;
  };
const { data: notifications, isLoading } = useQuery(["notifications", id], () =>
    getNotifications({ id })
  );
  return { notifications, isLoading };
}

export default useNotiifications