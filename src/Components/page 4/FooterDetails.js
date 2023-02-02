import React from 'react';
import "./FooterDetails.css"

function FooterDetails({ heading, Iconone, detailone, Icontwo, detailstwo }) {
    return (
        <div className='footer_details'>
            <h4>{heading}</h4>
            <div className='footer_detail'>
                {Iconone ?(<Iconone />):console.log("Not working")}
                <h5>{detailone}</h5>
            </div>
            <div className='footer_detail'>
            {Icontwo ?(<Icontwo />):console.log("Not working")}
                <h5>{detailstwo}</h5>
            </div>
        </div>
    )
}

export default FooterDetails;