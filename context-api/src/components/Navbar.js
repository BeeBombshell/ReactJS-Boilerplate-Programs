import React, {useContext} from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { ThemeContext } from "../Contexts/ThemeContext";

/*class Navbar extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>
            {(authContext) => {
                return (
                    <ThemeContext.Consumer>
                        {(themeContext) => {
                            const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                            const {isLoggedIn, changeAuthStatus} = authContext;
                            const theme = isDarkTheme ? darkTheme : lightTheme;

                            return (
                                <nav style={{
                                    background: theme.background,
                                    color: theme.text,
                                    height: '120px',
                                    textAlign: 'center'
                                }}>
                                    <h2 style={{ textAlign: 'center' }}>
                                        Oak Academy
                                    </h2>
                                    <button className="ui inverted violet button" onClick={changeAuthStatus}>{ isLoggedIn ? 'Logged In' : 'Logged Out'}</button>
                                    <div className="ui three buttons">
                                        <button className="ui button">Overview</button>
                                        <button className="ui button">Contact</button>
                                        <button className="ui button">Support</button>
                                    </div>
                                </nav>
                            )
                        }}

                    </ThemeContext.Consumer>
                )
            }}

            </AuthContext.Consumer>
        )
    }
};*/

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    return (
        <nav style={{
            background: theme.background,
            color: theme.text,
            height: '120px',
            textAlign: 'center'
        }}>
            <h2 style={{ textAlign: 'center' }}>
                Oak Academy
            </h2>
            <button className="ui inverted violet button" onClick={changeAuthStatus}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</button>
            <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
            </div>
        </nav>
    )
}

export default Navbar;