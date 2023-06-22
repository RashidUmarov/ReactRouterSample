import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Comments = (props) => {
    const [comments, setComments] = useState([]);
    const postId = props.postId;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
            // fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [postId]);
    return (
        <>
            {
                comments ? (
                        <div className='div-comments'>
                            <p>Comments:</p>
                            <ul>
                                {
                                    comments.map(comment => (
                                            <Link key={comment.id} to={`/comments/${comment.id}`} className='li'>
                                                <li>{comment.id} - {comment.name}  </li>
                                            </Link>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    )
                    : null
            }
        </>
    )
}
export {Comments}