import { useDispatch } from "react-redux";
import { fetchArtworksAction } from "../../store/artworks-slice";

const Navigation = ({ currentPage, totalPages }) => {
    const dispatch = useDispatch();
    const prevPageHandler = () => {
        console.log('previous page');
        dispatch(fetchArtworksAction(currentPage - 1))
    }
    const nextPageHandler = () => {
        console.log('next page');
        dispatch(fetchArtworksAction(currentPage + 1))
    };
    return (<>
        {currentPage > 1 && <button onClick={prevPageHandler}className="backButton">&#60;</button>}
        {currentPage < totalPages && <button onClick={nextPageHandler} className="nextButton">&#62;</button>}
    </>)
}

export default Navigation;