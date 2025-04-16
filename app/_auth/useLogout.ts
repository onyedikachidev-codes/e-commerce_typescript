import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../_services/apiAuth";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/");
    },
  });

  return { logout, isPending };
}
