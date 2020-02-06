import React from 'react'
import '../CSS/Contact.css'
import ChristaPortrait from '../../Images/ChristaPortrait.jpg'


function Contact() {

    return (
        <div className='contactBody'>

            <div className='topSplit'>
                <div >Contact Me</div>
            </div>

            <div className="contactMiddle">
                
                <div className='leftSplit'>
                    <div >
                        <img className="christaPortrait" src={ChristaPortrait} alt='Christa Portrait'></img>
                    </div>
                </div>


                <div className='rightSplit'>
                    <form>
                        <div className="nameBox">
                            <div>Name</div>
                            <span>
                                <input type='text' name='first' style={{ height: "2vw", width: "40%" }}></input>
                                <input type='text' name='last' style={{ height: "2vw", margin: "1vw", width: "40%" }}></input>
                            </span>
                        </div>
                        <div className="emailBox">
                            <div>Email</div>
                            <input type='text' style={{ height: "2vw", width: "100%", marginTop: "1vw" }}></input>
                        </div>
                        <div className="commentsBox">
                            <div>Comments</div>
                            <textarea name='comments' rows='10' cols='60' style={{ marginTop: "1vw" }}></textarea>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact