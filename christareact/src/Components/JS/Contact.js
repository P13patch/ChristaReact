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
                    <div>Name</div>
                    <span>
                        <input type='text' value='First'></input>
                        <input type='text' value='Last'></input>
                    </span>
                    <div>Email</div>
                    <input type='text'></input>
                    <div>Comments</div>
                    <textarea name='comments' rows='10' cols='60'></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact