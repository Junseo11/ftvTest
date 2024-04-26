import { useNavigate } from "react-router-dom";


const ListItem = ({title,body,id,url})=>{

    const navigator = useNavigate();

    const onHandleClick = () =>{
        navigator(`/item/${id}`);
    }

    return(
        <div className="ListItem" onClick={onHandleClick}>
                <div>이름: {title}</div>
                <div>설명 {body}</div>
                <div>위치: {id}</div> 
                <img style={{ width: '50px', height: 'auto' }} src={url} alt="이미지" />

                <hr/>
                <br/>
     

        </div>
    );
};


export default ListItem;

