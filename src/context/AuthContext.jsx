import {
    createContext,
    useState
} from "react";

export const AuthContext =
    createContext();

export const AuthProvider = ({
    children
}) => {

    const storedToken =
        localStorage.getItem(
            "token"
        );

    const [token, setToken] =
        useState(storedToken);

    const [isAuthenticated,
        setIsAuthenticated
    ] = useState(
        !!storedToken
    );

    const login = (jwt) => {

        localStorage.setItem(
            "token",
            jwt
        );

        setToken(jwt);

        setIsAuthenticated(
            true
        );
    };

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        setToken(null);

        setIsAuthenticated(
            false
        );
    };

    return (

        <AuthContext.Provider
            value={{
                token,
                isAuthenticated,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>
    );
};