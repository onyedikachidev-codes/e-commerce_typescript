import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../_services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getAuthUser,
  });

  return { user, isLoading };
}
