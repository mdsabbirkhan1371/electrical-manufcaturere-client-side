import React, { useEffect, useState } from 'react';
import SingleToolPart from './SingleToolPart';
import './ToolsParts.css'

const ToolsParts = () => {

    const [toolsParts, setToolsParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setToolsParts(data))
    }, [])
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='tools-parts'>
                    {
                        toolsParts.map(toolPart => <SingleToolPart
                            toolPart={toolPart}
                            key={toolPart._id}
                        ></SingleToolPart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToolsParts;