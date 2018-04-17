import React from "react";
import './QueueDisplay.css';
import Draggable from 'react-draggable';


const QueueDisplay = () =>(
  <div id="QueueDisplay">
	  <h1>Queue Display </h1>
      <div id="Customers">
	  <h2>Customers</h2>
	  </div>
      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
		  <div className="Drag">
              <div className="handle"></div>
              <div>Nancy Stevens</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Thomas Kip</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Mike Richards</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Jimmy Rolland</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Eden Hazard</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Pedro Rodriguez</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Thibeaut Courtois</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Zlatan Ibrahimavic</div>
          </div>
      </Draggable>

      <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[10, 10]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="Drag">
              <div className="handle"></div>
              <div>Morty</div>
          </div>
      </Draggable>

  </div>
);

export default QueueDisplay;
