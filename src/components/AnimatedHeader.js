import { useEffect, useState } from "react";
import "./style.css"



export default function AnimatedHeader(){

    const [activeBox,setActivebox] = useState("box0")
    const [index,setIndex] = useState(0)
    useEffect(()=>{

        
      setTimeout(()=>{
          changeIndex()
      },3000)
        

    

    },[index])

    
   
    const changeIndex=()=>{
        let newIndex = (index +1)%4;
        
        setIndex(newIndex)
        let currentBox = document.querySelector('.active').classList.remove('active')
        if(currentBox){
            
        }
        // document.querySelector(`.box${index}`).classList.add("active")
        // document.querySelector(`.sub_box${index}`).classList.add("active")
        console.log(index);
    }

    return(
        <div className="MainContainer" style={{width:'100%'}}>
            
            <div className="Container box0 active " style={index == 0?{color:'#0E306D'}:{color:'black'}}>
                <h3>Live classes from Industry Gurus</h3>
                <span className={index == 0?"container box0":"container"}>
                Our mission is to get you closer to the most exciting jobs and internships.
                </span>
            </div>

            <div className="Container box1" style={index == 1?{color:'red'}:{color:'black'}}>
                <h3>Learning Community</h3>
                <span className={index == 1?"container box1":"container"}>
                Our mission is to get you closer to the most exciting jobs and internships.
                </span>
            </div>
            

            <div className="Container box2" style={index == 2?{color:'red'}:{color:'black'}}>
                <h3>Exclusive Mentorship</h3>
                <span className={index == 2?"container box2":"container"}>
                Our mission is to get you closer to the most exciting jobs and internships.
                </span>
            </div>

            <div className="Container box3" style={index == 3?{color:'red'}:{color:'black'}}>
                <h3>Get Kickass Jobs</h3>
                <span className={index == 3?"container box3":"container"}>
                Our mission is to get you closer to the most exciting jobs and internships.
                </span>
            </div>
        </div>
    )
}