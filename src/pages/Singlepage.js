import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {Comments} from "../components/Comments";

const Singlepage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);


    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Comments postId={id} />
                </>
            )}
        </div>
    );
}

export {Singlepage}