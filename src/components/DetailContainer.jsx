import React, { Component } from 'react';

export default class DetailContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            isExpanded:false
        }
    }

    toggleExpand=()=>{
        this.setState({isExpanded:!this.state.isExpanded})
    }
 
    render(){
        const {imgSrc, header,summery}= this.props;
        return <div class="detail-container">
<div >
    <div  className="header-section" >{header}

    <button className="button-align" onClick={()=>this.toggleExpand()}>{this.state.isExpanded?"-":"+"}</button>
    </div>
    {this.state.isExpanded && <div className="expandable-container" >
        <div className="header-container" >
            <h3>{summery.title}</h3>
        {summery.summeryList.map((cnt,i)=><li key={i}>{cnt}</li>)}
    </div>
        <div >
            <img className="image-section"  src={imgSrc}/>
        </div>
        </div>}
    </div>
        </div>
    }
}