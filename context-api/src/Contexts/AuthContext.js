import React, { createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {

    state = {
        isLoggedIn: false
    };

    changeAuthStatus = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    };

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, changeAuthStatus: this.changeAuthStatus }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}
export default AuthContextProvider;