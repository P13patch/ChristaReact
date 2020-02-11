import React from 'react'
import '../CSS/Contact.css'
import ChristaPortrait from '../../Images/ChristaPortrait.jpg'


function Contact() {

    return (
        <div className='contactBody'>

            <div className='contactTop'>
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
                        <fieldset style={{borderStyle:'none'}}>
                            <div className="nameBox">
                                <div>Name</div>
                                <span>
                                    <input type='text' name='first' className='nameFirst'></input>
                                    <input type='text' name='last' className='nameLast'></input>
                                </span>
                            </div>
                            <div className="emailBox">
                                <div>Email</div>
                                <input type='text' className='emailTextField'></input>
                            </div>
                            <div className="commentsBox">
                                <div>Comments</div>
                                <textarea name='comments' rows='10' className='commentsTextArea'></textarea>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact