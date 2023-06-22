import {useEffect, useState} from "react";

const id = Math.floor(Math.random() * 501);
const Home = () => {
    const [photo, setPhoto] = useState(null);
    console.log(`id = ${id}`);


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    //         .then(res => res.json())
    //         .then(data => setPhoto(data))
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // });

    return (
        <div>
            <h1>About us</h1>
            <p>This is a Home page</p>
            {photo ? (
                <>
                    <p>Photo title: {photo.title}</p>
                    <img src={photo.url} alt={photo.title}/>
                </>
            ) : "no photo"}

        </div>
    )
}
export {Home}