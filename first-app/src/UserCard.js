import React from "react";

const UserCard = (props) => {
    return (
        <div className="ui card" style={{backgroundColor:"#FFDFD3"}}>
            <div className="content">
                <div className="header" style={{color: "grey"}}>{props.profile}</div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="ui bottom button" style={{ backgroundColor: "#957DAD", color:"white" }}>
                <i className="add icon"></i>
                Add Friend
            </div>
        </div>
    )
}

export default UserCard;