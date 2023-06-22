import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const SingleComment = () => {
    const {id} = useParams();
    const [comment, setComment] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [id]);


    return (
        <div>
            {comment && (
                <>
                    <p>{comment.email}</p>
                    <h3>{comment.name}</h3>
                    <blockquote>{comment.body}</blockquote>
                </>
            )}
        </div>
    );
}

export {SingleComment}