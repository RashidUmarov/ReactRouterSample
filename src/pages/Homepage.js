import {useEffect, useState} from "react";


const Home = () => {
    const id = Math.floor(Math.random() * 501);
    const [photo, setPhoto] = useState(null);
    console.log(`id = ${id}`);

    useEffect(() => {
        //fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        fetch(`https://picsum.photos/id/${id}/info`)
            .then(res => res.json())
            .then(data => setPhoto(data))
            .catch((error) => {
                console.log(error);
            })
    },[]);

    return (
        <div>
            <h1>About us</h1>
            <p>This is a Home page</p>
            {photo ? (
                <>
                    <p>Photo author: {photo.author}</p>
                    <img src={photo.download_url} alt={photo.author}/>
                </>
            ) : "no photo"}

        </div>
    )
}
export {Home}