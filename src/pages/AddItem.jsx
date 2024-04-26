import axios from "axios";
import { useState,useRef,useEffect } from "react";


const AddItem = () =>{
    const upload = useRef();
    const [imgFile, setImageFile] = useState([]);
    const [data,setData] = useState({
        name : "",
        body : "",
        img : []
    });

    const onHandleChange = (e)=>{

        const {name,value} = e.target;

        setData(prev =>({
            ...prev,
            [name] : value,
            img : imgFile
        }));
     
    }

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

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            img: imgFile
        }));
    
    }, [imgFile]);

    useEffect(() => {
        console.log(`이미지 변동 ${data.img.length}`);
    }, [data.img]);


    const onHandleSubmit = async()=>{
        if(data.name.length<1){
            alert("이름을 입력하세요");
        }
        else if(data.body.length<1){
            alert("내용을 입력하세요");
        }
        else{
            axios.post('https://my-json-server.typicode.com/typicode/demo/posts', data,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            }).then((res)=>console.log(res))
            .catch((err)=>console.log(err));
        }


    }



    return(
        <div className="AddItem" >


            <div>{"이름"}<input placeholder="이름을 입력하세요" name="name" onChange={onHandleChange}/></div>
            <div>{"정보"}<input placeholder="정보를 입력하세요" name="body" onChange={onHandleChange}/></div>
            <div>{"사진"}<input type="file" ref={upload} multiple onChange={onFileChange} />
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