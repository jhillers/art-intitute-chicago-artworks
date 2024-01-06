const ArtworkDetail = ({ img, description, title }) => {
    return (<li>
        <h2>{title}</h2>
        <img src={img }/>
        <div>{description}</div>
    </li>)
}
export default ArtworkDetail;