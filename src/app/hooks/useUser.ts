"use client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios'



export const useLendsqrUser = () => {
  const {
    data: lendsqrUserData,
    isError: isLendsqrUserError,
    error: lendsqrUserError,
    isPending: isLendsqrUserPending,
  } = useQuery({
    queryKey: ["lendsqrData"],
    queryFn: async () => {
      return await axios.get("https://run.mocky.io/v3/aae87cb0-a0ea-4488-864f-a79aa8f34d8f");
    },
  });
  return {
    lendsqrUserData,
    isLendsqrUserError,
    isLendsqrUserPending,
    lendsqrUserError,
  };
};