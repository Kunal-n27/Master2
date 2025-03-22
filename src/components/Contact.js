import React from 'react'


export default function contact() {
    return (
        <div>


            <meta charset="UTF-8" />

            <link rel="stylesheet" href="style.css" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <body>

                   
                    <div className="content">
                         <div className='row'>
                      
                            <div className='col-2'>
                            <div className="address details">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="topic">Address</div>
                                <div className="text-one">Surkhet, NP12</div>
                                <div className="text-two">Birendranagar 06</div>
                            </div>
                            </div>
                            <div className='col-2'>
                            <div className="phone details">
                                <i className="fas fa-phone-alt"></i>
                                <div className="topic">Phone</div>
                                <div className="text-one">+0098 9893 5647</div>
                                <div className="text-two">+0096 3434 5678</div>
                            </div>
                            </div>
                            <div className='col-2'>
                            <div className="email details">
                                <i className="fas fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">codinglab@gmail.com</div>
                                <div className="text-two">info.codinglab@gmail.com</div>
                            </div>
                            </div>
                        
                       </div>
                    </div>
                
            </body>


        </div>
    )
}
