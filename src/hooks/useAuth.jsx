import { useContext } from "react";
import { AuthContext } from "../contex/AuthProvider";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};