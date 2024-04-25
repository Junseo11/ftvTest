import { useNavigate } from "react-router-dom";


const ListItem = ({title,body,id,})=>{

    const navigator = useNavigate();

    console.log(`${title}`)

    const onHandleClick = () =>{
        navigator(`/item/${id}`);
    }

    return(
        <div className="ListItem" onClick={onHandleClick}>
                <div>이름: {title}</div>
                <div>설명 {body}</div>
                <div>위치: {id}</div> 
                <hr/>
                <br/>
     

        </div>
    );
};


export default ListItem;

