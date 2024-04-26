import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import { useEffect } from 'react';




const Home = ({user,data}) =>{
    const navigator = useNavigate();
    const {auth}  = user;

    useEffect(()=>{
      console.log(auth);
    },[]);


    return(
        <div className="Home" >

          {auth==1 && 
          <button onClick={()=>navigator('/AddItem')}>추가하기</button> 
          }

      

 
     
     <div className='item_wrapper'>
        {data.map((it)=>{

          return <ListItem {...it} key={it.id}/>       
        })}

      </div>

        </div>
    )
}

export default Home;