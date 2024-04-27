import axios from "axios";
import { useState,useRef,useEffect } from "react";


const AddItem = () =>{
    const [imgFile, setImageFile] = useState([]);
    const [name, setName] = useState("");
    const [body, setBody] = useState("");


    const onFileChange = (e)=>{
        const imageLists = e.target.files;
        let imageUrlLists = [...imgFile];

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
          }
        setImageFile(imageUrlLists);

        console.log(`이미지 배열개수 ${imageUrlLists.length}`);
    }


 
    const onHandleSubmit = async()=>{
        if(name<1){
            alert("이름을 입력하세요");
        }
        else if(body<1){
            alert("내용을 입력하세요");
        }
        else{
            const formData = new FormData();

            formData.append('name',name);
            formData.append("body", body);
            formData.append('img',imgFile);


            axios.post('https://my-json-server.typicode.com/typicode/demo/posts', formData,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            }).then((res)=>console.log(res))
            .catch((err)=>console.log(err));
        }


    }



    return(
        <div className="AddItem" >


            <div>{"이름"}<input placeholder="이름을 입력하세요" name="name" onChange={(e)=>setName(e.target.value)}/></div>
            <div>{"정보"}<input placeholder="정보를 입력하세요" name="body" onChange={(e)=>setBody(e.target.value)}/></div>
            <div>{"사진"}<input type="file" multiple onChange={onFileChange} />
            { imgFile.map((it) => {
                    return (
                        <label>
                            <img className='addImage' src={it}/>
                        </label>
                    );
                })}
                        
            
            </div>

            <button onClick={onHandleSubmit}>제출하기</button>


     

        </div>
    )
}

export default AddItem;