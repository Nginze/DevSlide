import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const useMatch = (id) => {

  const getMatches = async ({id}) => {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:5000/matches/${id}`,
      withCredentials: true,
    });
    return data;
  };
const { data: matches, isLoading } = useQuery(["matches", id], () =>
    getMatches({ id })
  );
  return { matches, isLoading };
}

export default useMatch