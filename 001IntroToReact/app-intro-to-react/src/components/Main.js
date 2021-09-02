import React from 'react'
import './style.css'

import SubContents from './SubContents'
import Advertisement from './Advertisement'

class Main extends React.Component {
    render() {
        return (
            <div className='main-red'>
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </div>
        )
    }

}

export default Main