import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { User, fetchCurrentUser, signOut as apiSignOut } from "@/services/api";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false,
  });

  const logout = () => {
    apiSignOut();
    queryClient.setQueryData(["currentUser"], null);
  };

  const setUser = (newUser: User | null) => {
    queryClient.setQueryData(["currentUser"], newUser);
  };

  return (
    <AuthContext.Provider value={{ user: user || null, isLoading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
