import { useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsPage = () => {

    const { id } = useParams()

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }, [ id ])

    return ( 
        <div>News page</div>
     );
}
 
export default NewsPage;