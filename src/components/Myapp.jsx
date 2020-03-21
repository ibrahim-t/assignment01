import React, { Component } from 'react';
import DetailContainer from "./DetailContainer";
import tl from "./images/tl.png"
import dev from "./images/dev.jpg"
import "./style/custom-style.css"

export default class Myapp extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
				{name:"Team Lead",summery:{title:"TL Responsibilities", summeryList:["Manages inventories and stock", "Provides encouragement to team members","skill checks"]},img:tl},
				{name:"Developer",summery:{title:"Developer Responsibilities", summeryList:["PDesign & Develope Software Apps", "participating in programming activities","esigning and implementing new programs and features"]},img:dev},
				
        ]
        }
    }


    render(){
        return <div id="root-container">
{
this.state.data.map((t,index)=><DetailContainer key={index} header={t.name} summery={t.summery} imgSrc={t.img}/>)
}
        </div>
    }
}