import React, {
    createContext,
    useContext,
    useState,
} from "react";
import type { User, AuthContextValue } from "../types/auth";


const AuthContext =
    createContext<AuthContextValue | undefined>(undefined);
const AUTH_STORAGE_KEY = "shopsphere_user";

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] =
        useState<User | null>(() => {
            const storedUser =
                localStorage.getItem(
                    AUTH_STORAGE_KEY
                );

            if (!storedUser) {
                return null;
            }

            try {
                return JSON.parse(storedUser);
            } catch {
                localStorage.removeItem(
                    AUTH_STORAGE_KEY
                );

                return null;
            }
        });

    const login = () => {
        const loggedInUser: User = {
            id: "user-1",
            name: "Shivam",
            email: "shivam@example.com",
        };

        setUser(loggedInUser);

        localStorage.setItem(
            AUTH_STORAGE_KEY,
            JSON.stringify(loggedInUser)
        );
    };

    const logout = () => {
        setUser(null);

        localStorage.removeItem(
            AUTH_STORAGE_KEY
        );
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: user !== null,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}