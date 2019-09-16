import React, { Component } from 'react'

class Comment extends Component {
    
    render(){
        return (
            <div className="comment">
                <li>{this.props.commentText}</li>
            </div>
        )
    }
}

export default Comment