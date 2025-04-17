import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../_services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account Successfully Created");
    },
  });

  return { signup, isPending };
}
