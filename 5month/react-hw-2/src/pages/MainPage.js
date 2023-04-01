import { useLocation, useNavigate, useParams } from "react-router-dom";

const MainPage = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const {} = useParams()


    function navToAbout() {
        navigate('/about')
    }

    return ( 
        <div>MainPage

            <h2 onClick={navToAbout}>To about page</h2>
        </div>
     );
}
 
export default MainPage;