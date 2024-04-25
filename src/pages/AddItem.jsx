import axios from "axios";
import { useState } from "react";


const AddItem = () =>{

    const [data,setData] = useState({
        name : "",
        body : ""
    });

    const onHandleChange = (e)=>{

        const {name,value} = e.target;

        setData(prev =>({
            ...prev,
            [name] : value
        }));
     
    }

    const onHandleSubmit = async()=>{
        if(data.name.length<1){
            alert("이름을 입력하세요");
        }
        else if(data.body.length<1){
            alert("내용을 입력하세요");
        }
        else{
            axios.put('/AddItem', data,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            });
        }


    }



    return(
        <div className="AddItem" >

            <div>{"이름"}<input placeholder="이름을 입력하세요" name="name" onChange={onHandleChange}/></div>
            <div>{"정보"}<input placeholder="정보를 입력하세요" name="body" onChange={onHandleChange}/></div>

            <button onClick={onHandleSubmit}>제출하기</button>


     

        </div>
    )
}

export default AddItem;