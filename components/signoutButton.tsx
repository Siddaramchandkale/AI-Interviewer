"use client";

import { signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
export default function SignOutButton() {
  const router = useRouter();

  const handleClick = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4 mb-4"
    >
      Sign Out
    </button>
  );
}
