import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchArtworkDetailAction } from "../../store/artwork-detail-slice";
const ArtworkListItem = ({id, img, alt }) => {
    const navigate = useNavigate();
    const onClickHandler = ()=>{           
        navigate(`detail/${id}`);
    }
    return (<li onClick={onClickHandler}>
        <img src={img} alt={alt} />
    </li>)
}

export default ArtworkListItem;