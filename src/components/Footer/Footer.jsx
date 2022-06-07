import React from 'react'
import './Footer.css'
import logo from '../res/drawable/portfolio.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-details">
                <div className="headings">
                    <img src={logo} alt="" />
                    <div>Joe Cristian Jamis</div>
                </div>
                <div>
                    <div>
                        EN . This website was developed by Joe Cristian Jamis. It cannot and should not be reproduced in any forms or by any means without the consent from him.
                    </div>
                </div>
                <div>
                    <div>
                        TAG . Ang website na ito ay nilikha ni Joe Cristian Jamis. Ito ay hindi maaari at hindi dapat kopyahin sa anumang banhay o sa anumang paraan nang walang pahintulot galing sa kaniya.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer