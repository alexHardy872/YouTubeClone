import React from 'react';
import VideoResult from './VideoResult.js';
import SideNav from './SideNav.js';

const Results = (props) => {

    const renderItems = (arr) => {
       
        if(arr){
            return (
                props.vidList.vidList2.map((video) => {
                    return <VideoResult onClick={props.addCurrent} video={video} key={video.index}/>
                    })
            )
        }
        else{
            return <h2>Search to populate the list!</h2>
        }
    }

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 bg-white">
                    <SideNav/>                 
                </div>
                
                <div className="col-lg-8 bg-gray">
                 <div className="container results-block-main">

                {renderItems(props.vidList)}

                 {/* {props.vidList !== null &&
                    console.log(props.vidList),
                    props.vidList.map((index, snippet) => {
                        return <VideoResult onClick={props.addCurrent} video={snippet} key={index}/>
                        })

                 }
                 {props.vidList === null &&
                    <h1>Search to populate</h1>

                 } */}
          
                 

                    
                  

                 </div>
            
                </div>

                <div className='col-md-2 bg-gray'>

                </div>

            </div>
            
        </div>
    )
}

export default Results;