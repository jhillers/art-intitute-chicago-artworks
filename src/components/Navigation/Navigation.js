import { useDispatch } from "react-redux";

const Navigation = ({currentPage,totalPages})=>{
    const dispatch = useDispatch();
    const prevPageHandler = ()=>{
        console.log('previous page');
    }
    const nextPageHandler = ()=>{
        console.log('next page');
    };
    return (<>
   { currentPage > 1 && <button className="backButton">&#60;</button>}
    {currentPage < totalPages && <button className="nextButton">&#62;</button>}
    </>)
}