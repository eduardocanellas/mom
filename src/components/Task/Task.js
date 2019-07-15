
import React from 'react'
import './Task.css'
import Checkbox from './Checkbox/Checkbox';

export default function task(props) {

    return (
        <div className="task">
            <Checkbox status="done"></Checkbox>
            <p>{props.content}</p>
        </div>
    )
}

