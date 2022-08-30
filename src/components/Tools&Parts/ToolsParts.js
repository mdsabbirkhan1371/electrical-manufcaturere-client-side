import React, { useEffect, useState } from 'react';
import SingleToolPart from './SingleToolPart';
import './ToolsParts.css'

const ToolsParts = () => {


    const [toolsParts, setToolsParts] = useState([]);
    useEffect(() => {
        fetch('https://electrical-manufactere.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setToolsParts(data))
    }, []);


    return (
        <div className='container p-5'>

            <p className='text-center text-info fs-3 my-5'>Tools&Parts</p>
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
            <hr />
        </div>

    );
};

export default ToolsParts;