import React from 'react';


const SingleComment = (props) => {
    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={props.picture} alt="Profile Pic" style={{width:"60px"}} />
            </a>
            <div className='content' style={{textAlign:"center"}}>
                <a href="/" className='author'>
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className='date' style={{color:"#766AA3"}}>
                        {props.date}
                    </span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default SingleComment;