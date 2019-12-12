import React from 'react';
import VideoResult from './VideoResult.js';
import SideNav from './SideNav.js';

const Results = (props) => {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 bg-white">
                    <SideNav/>                 
                </div>
                
                <div className="col-lg-8 bg-gray">
                 <div className="container results-block-main">
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>
                    <VideoResult/>

                 </div>
            
                </div>

                <div className='col-md-2 bg-gray'>

                </div>

            </div>
            
        </div>
    )
}

export default Results;