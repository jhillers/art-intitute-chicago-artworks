import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const ArtworkDetail = ({ img, description, title }) => {
    return (<li>
        <h2>{title}</h2>
        <img src={img }/>
        <div>{description && parse(description)}</div>
        <Link to='..'>BACK</Link>
    </li>)
}
export default ArtworkDetail;