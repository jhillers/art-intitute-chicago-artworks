import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ArtworkDetail from "../components/Detail/ArtworkDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArtworkDetailAction } from "../store/artwork-detail-slice";

const DetailPage = () => {
    const params = useParams();
    const detail = useSelector(state => state.detail);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchArtworkDetailAction(params.artworkId));
    },[dispatch,params.artworkId]);
    return (
        <ArtworkDetail title={detail.title}
            description={detail.description}
            img={detail.img} />
    )
}

export default DetailPage;