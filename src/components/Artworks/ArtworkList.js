import ArtworkListItem from "./ArtworkListItem";

const ArtworkList = ({ artworks }) => {
    return (
        <ul>
            {artworks.map(artwork => {
                return <ArtworkListItem key={artwork.id}
                    img={artwork.img}
                    alt={artwork.alt} />
            })}
        </ul>
    );
}