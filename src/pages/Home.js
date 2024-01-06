import { useSelector } from "react-redux";
import ArtworkList from "../components/Artworks/ArtworkList"
import Navigation from "../components/Navigation/Navigation"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArtworksAction } from "../store/artworks-slice";

const HomePage = ()=>{
    const dispatch = useDispatch();   
    const artworks = useSelector((state) => state.artworks.artworks);
    const pagination = useSelector(state=> state.pagination);
    useEffect(()=>{
        dispatch(fetchArtworksAction());
      },[dispatch]);

    return (
        <div>
            <h1>Art Institute of Chicago Artworks</h1>
            <ArtworkList artworks={artworks}/>
            <Navigation currentPage={pagination.currentPage} totalPages={pagination.totalPages}/>
        </div>
    )
}

export default HomePage;