import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useTimeline = id => {
  const getTimeline = async () => {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:5000/timeline",
      withCredentials: true,
      data: {
        userId: id,
        preferences: ["Casandra", "SQL", "Redis"],
        isRecruiter: true
      },
    });
    return data;
  };
  const { data: timeline, loading } = useQuery(["timeline", id], () =>
    getTimeline({ id })
  );
  return { timeline, loading };
};

export default useTimeline;
