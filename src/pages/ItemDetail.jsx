import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../App";



const ItemDetail = () =>{

    const {id}= useParams();
    const {data} = useContext(DataContext);

    const res = data.find((it)=>{
        return it.id==id;
    });

  

    return(
        <div className="ItemDetail" >
            <h2>{res.title}</h2>
            <h2>{res.body}</h2>
            <h2>{res.id}</h2>
            <img style={{ width: '50px', height: 'auto' }} src={res.url} alt="이미지" />
        </div>
    )
}

export default ItemDetail;