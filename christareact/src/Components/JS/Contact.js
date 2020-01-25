import React from 'react'
import '../CSS/Contact.css'



function Contact() {

    return (
        <div className='contactBody'>

            <div className='leftSplit'>
                <div>portrait</div>
            </div>


            <div className='rightSplit'>
                <form>
                    <div className="nameBox">
                        <div>Name</div>
                        <span>
                            <input type='text' name='first' style={{height:"2vw"}}></input>
                            <input type='text' name='last' style={{height:"2vw"}}></input>
                        </span>
                    </div>
                    <div className="emailBox">
                        <div>Email</div>
                        <input type='text' style={{height:"2vw", width:"20vw"}}></input>
                    </div>
                    <div className="commentsBox">
                        <div>Comments</div>
                        <textarea name='comments' rows='10' cols='60'></textarea>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Contact