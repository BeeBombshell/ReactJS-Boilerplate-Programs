import React from "react";
import { Link } from 'react-router-dom';
import Modal from "./Modal";

const Contact = (props) => {
    /*setTimeout(() => {
    props.history.push('/about')
    }, 2000)*/

    return (
        <div>
            {/* <Modal /> */}
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: '80px' }}
            >
                <Link to='card/Alex' className="ui header">{props.card}</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Contact;