import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProfile = id => {
  const getProfile = async ({ id }) => {
    const { data } = await axios({
      method: "get",
      url: `http://localhost:5000/profile/${id}`,
      withCredentials: true,
      data: {
        userId: id,
      },
    });
    return data;
  };
  const { data: profile, loading } = useQuery(["profile", id], () =>
    getProfile({ id })
  );
  console.log(profile);
  return { profile, loading };
};

export default useProfile;
