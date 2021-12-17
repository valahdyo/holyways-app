import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [isLogin, setIsLogin] = useState("false")

    const login = () => {
        setIsLogin("true")
    }

    const logout = () => {
        setIsLogin("false")
    }

    return (
        <AuthContext.Provider value={{isLogin, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider