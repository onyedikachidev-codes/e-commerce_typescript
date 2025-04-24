import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signUp as signupApi } from "../_services/apiAuth";
import toast from "react-hot-toast";
import { AuthError } from "@supabase/supabase-js";

export function useSignup() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      router.push("/");
      toast.success("Account Successfully Created");
    },
    onError: (error: AuthError) => {
      if (error?.message?.toLowerCase().includes("email")) {
        toast.error("Email is already in use");
        console.log("email already in use");
        alert("email already is use");
      } else {
        toast.error(error.message || "Signup failed");
      }
    },
  });

  return { signup, isPending };
}
