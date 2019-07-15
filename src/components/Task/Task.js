
import React from 'react'
import './Task.css'
import Checkbox from './Checkbox/Checkbox';

export default function task(props) {

    let taskClass = "task";
    if (props.old)
        taskClass += " task--old";

    return (
        <div className={taskClass}>
            <Checkbox old={props.old} status={props.status}></Checkbox>
            <p>{props.content}</p>
        </div>
    )
}

