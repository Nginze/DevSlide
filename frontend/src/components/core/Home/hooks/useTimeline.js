import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useTimeline = id => {
  const getTimeline = async ({id}) => {
    const { data } = await axios({
      method: "post",
      url: `http://localhost:5000/timeline/${id}`,
      withCredentials: true,
      data: {
        preferences: ["Casandra", "SQL", "Redis"],
        isRecruiter: true
      },
    });
    return data;
  };
  const { data: timeline, isLoading } = useQuery(["timeline", id], () =>
    getTimeline({ id })
  );
  return { timeline, isLoading };
};

export default useTimeline;
