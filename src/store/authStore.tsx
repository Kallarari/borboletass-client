import { IUser } from "@/types/IUser";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type IAuthStore = {
  user: IUser | null;
  saveUser: (userToSet: IUser) => void;
};

export const useAuthStore = create<IAuthStore>()(
  persist<IAuthStore>(
    (set) => ({
      user: null,
      saveUser: (userToSet: IUser) => set(() => ({ user: userToSet })),
    }),
    {
      name: "auth",
    }
  )
);
