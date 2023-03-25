import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)

    return ( 
        <div>About page
            <h1 onClick={() => navigate('/news/1231234')}>BACK</h1>
        </div>
     );
}
 
export default AboutPage;