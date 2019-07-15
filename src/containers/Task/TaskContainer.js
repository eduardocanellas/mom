import React, { Component } from "react";
import "./TaskContainer.css";
import Task from "../../components/Task/Task";
import TimeDivision from "../../components/TimeDivision/TimeDivision";

export default class TaskContainer extends Component {
  render() {
    return (
      <div className="task_container">
        <div>
          <Task content="Donec vitae lorem orci. Aenean." status="done" />
          <Task content="Donec vitae lorem orci. Aenean." status="done" />
          <Task content="Donec vitae lorem orci. Aenean." status="ongoing" />
          <Task content="Donec vitae lorem orci. Aenean." status="failed" />
          <Task content="Mauris eu pretium libero, vel." status="ongoing" />
        </div>
        <TimeDivision />
        <div>
          <Task old content="Donec vitae lorem orci. Aenean." status="failed" />
          <Task old content="Mauris eu pretium libero, vel." status="ongoing" />
          <Task old content="Mauris eu pretium libero, vel." status="ongoing" />
          <Task old content="Mauris eu pretium libero, vel." status="ongoing" />
          <Task old content="Mauris eu pretium libero, vel." status="ongoing" />
        </div>
      </div>
    );
  }
}
