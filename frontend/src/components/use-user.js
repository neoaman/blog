import useSWR from "swr";
import { fetcher } from "./Communicator";

export default function useUser() {
  const { data, error, mutate } = useSWR("/user-api/", fetcher);

  const loading = !data;

  return {
    loading,
    user_: data,
    error,
    mutate,
  };
}
