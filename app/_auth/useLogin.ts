import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login as loginApi } from "../_services/apiAuth";
import { LoginProps } from "../_models/item";
import toast from "react-hot-toast";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginProps) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("It worked");
      router.push("/products");
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
