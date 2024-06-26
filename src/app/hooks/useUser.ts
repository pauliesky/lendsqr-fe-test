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
      return await axios.get("https://run.mocky.io/v3/b981f7bd-595d-4eef-bbb8-e95045ecc532");
    },
  });
  return {
    lendsqrUserData,
    isLendsqrUserError,
    isLendsqrUserPending,
    lendsqrUserError,
  };
};