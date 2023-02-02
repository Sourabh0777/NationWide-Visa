import React from 'react';
import "./Footer.css"
import FooterDetails from './FooterDetails';
// Material Ui
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <div className='footer'>
            <FooterDetails
                heading={"Head Office"}
                Iconone={LocationOnIcon}
                detailone={"908-912, Modi Tower, Nehru Place, New Delhi"}
                Icontwo={AccessTimeIcon}
                detailstwo={"Mon to Sat - 10: 00AM to 7: 00PM"} />
            <FooterDetails
                heading={"Get Free Consultation"}
                Iconone={CallIcon}
                detailone={"+91-92 92 92 92 81"}
                Icontwo={AccessTimeIcon}
                detailstwo={"Mon to Sat - 10: 00AM to 7: 00PM"} />
        </div>
    )
}

export default Footer;