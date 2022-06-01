import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/pic1.jpg';
import profile2 from './image/pic2.jpg';
import profile3 from './image/pic3.jpg';
import UserCard from './UserCard';

const App = () => {

    return (
        <div className='ui comments'>
            <UserCard profile='Sarah Dumbells'>
                <SingleComment
                    name='Sarah'
                    date='Today at 5:00PM'
                    text='Its amazing!'
                    picture={profile1} />
            </UserCard>

            <UserCard profile='Alex Shitface'>
                <SingleComment
                    name='Alex'
                    date='Today at 6:00PM'
                    text='Great Job!'
                    picture={profile3} />
            </UserCard>

            <UserCard profile='Jack and the beanstock'>
                <SingleComment
                    name='Jack'
                    date='Today at 7:00PM'
                    text='Thanks..'
                    picture={profile2} />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)