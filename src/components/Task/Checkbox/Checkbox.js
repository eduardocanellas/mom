import React from 'react'
import './Checkbox.css';
import imgDone from './checkbox--done.svg';
import imgFailed from './checkbox--failed.svg';
import imgOngoing from './checkbox--ongoing.svg';

export default function checkbox(props) {

    let checkboxClass = props.old ? "task__old_checkbox" : "task__checkbox";
    let image = "", message = "";

    switch (props.status) {
        case "done":
            checkboxClass += " task__checkbox--done";
            image = imgDone;
            message = "concluído";
            break;
        case "failed":
            checkboxClass += " task__checkbox--failed";
            image = imgFailed;
            message = "falhou";
            break;
        case "ongoing":
            checkboxClass += " task__checkbox--ongoing";
            image = imgOngoing;
            message = "contínuo";
            break;
        default:
            break;
    }

    return (
        <div className={checkboxClass}>
            <img src={image} alt={message}></img>
        </div>
    )
}

