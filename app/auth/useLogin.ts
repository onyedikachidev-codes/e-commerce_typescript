import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { login as loginApi } from "../services/apiAuth";
import { LoginProps } from "../_models/item";
import toast from "react-hot-toast";

export function useLogin() {
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: LoginProps) =>
      loginApi({ email, password }),
    onSettled: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
