import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../_services/apiAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/");
      toast.success("Logout Successful");
    },
  });

  return { logout, isPending };
}
