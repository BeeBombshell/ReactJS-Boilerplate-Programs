import React from 'react';
import axios from 'axios';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(response.data)
        })

   }

    render() {

        const posts = this.state.posts.map((post) => {
            return <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        })

        return (
        <div>
                <h1>List of Posts</h1>
                {posts}
        </div>
        );
  }
}

export default PostList;