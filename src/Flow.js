import { useRef, useState, useCallback } from 'react';
import { Modal } from "react-bootstrap";
import ApiPopup from './ApiPopup';
import IfElseCondition from './IfElseCondition';
import ReactFlow, {
  addEdge, Controls, ReactFlowProvider, removeElements, updateEdge
} from 'react-flow-renderer';
import './App.css';
import Drag from './Drag';
import './index.css';

const initialElements = [
  {
    id: 'dndnode_0',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 470, y: 10 }
  },
];

let id = 1;
let Eid = 0;
let counter = 50;
const getId = () => `dndnode_${id++}`;
const getEdgeId = () => `Edgenode_${Eid++}`;
const getCounter = () => `dndnode_${counter += 100}`;
let isproperties = false;
const style = {
  background: '#AED6F1',
  marginTop: 75,
  width: '90%',
  height: 640,
}

const Flow = () => {

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const [showpopup, setShowpopup] = useState(false);
  const [showIFpopup, setIFShowpopup] = useState(false);
  const [Mode, setMode] = useState('');
  const [conditionType, setconditionType] = useState('');
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const yPos = useRef(0);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onDragClick = () => {
    isproperties = true;

  }



  const toogleAddClickPopup = (val) => {
    this.setState({
      showpopup: val,
      Mode: "C",
    });
  };
  const onCloseClick = () => {
    setShowpopup(false);
  };

  const onIFCloseClick = () => {
    setIFShowpopup(false);
  };


  const onExecuteClick = (Result) => {
    addNode(Result);
    setShowpopup(false);
  };
  const onIFExecuteClick = (Result, Node, NodeIF) => {
    addNodeIF(Result, Node, NodeIF);

    setIFShowpopup(false);
  };
  const Popup = () => {
    if (conditionType == 'APICall') {
      setShowpopup(true);
    }
    else {
      setIFShowpopup(true);
    }

  }


  const onDrop = (event) => {
    let _length = 0;
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    if (elements.length == 1) {
      _length = 1;
    }
    if (type != 'APICall') {
      setconditionType('IfElse');
    }
    else {
      setconditionType('APICall');
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    let ID = getId();
    const newNode = {
      id: ID,
      counter: getCounter(),
      className: `${type}`,
      type,
      position: { x: 470, y: counter },
      data: { label: `${type}` }

    };
    setElements((es) => es.concat(newNode));
    if (_length == 1) {
      let OldId = parseInt(ID.replace('dndnode_', '')) - 1;
      const newEdgeNode = {
        id: getEdgeId(),
        source: `dndnode_${OldId}`,
        target: ID,
        type: 'smart',
        animated: true,
        style: { stroke: '#fff' },
        className: 'normal-edge',
      }

      console.log(newEdgeNode);
      setElements((es) => es.concat(newEdgeNode));

    }

  };
  function calladdNode() {
    alert('call one to other');
  }
  const addNode = useCallback((Result) => {
    let ID = getId();
    let Xposition = 270;
    let clscss = '';
    if (Result == 'Yes') {
      Xposition = 270;
      clscss = 'green-edge';
    }
    else {
      Xposition = 670;
      clscss = 'red-edge'
    }
    const newNode = {
      id: ID,
      counter: getCounter(),
      type: 'APICall',
      data: { label: Result },
      position: { x: Xposition, y: counter },
      className: clscss,
    };
    setElements((es) => es.concat(newNode));
    let OldId = parseInt(ID.replace('dndnode_', '')) - 1;
    const newEdgeNode = {
      id: getEdgeId(),
      source: `dndnode_${OldId}`,
      target: ID,
      type: 'smart',
      animated: true,
      style: { stroke: '#fff' },
      className: 'normal-edge',
    }
    setElements((es) => es.concat(newEdgeNode));

  }, []);


  const addNodeIF = useCallback((Result, Node, NodeIF) => {
    debugger;
    let ID = getId();
    let Xposition = 270;
    let clscss = '';
    let print = '';
    if (Result == 'Yes') {
      Xposition = 270;
      clscss = 'green-edge';
      print = Node;
      Result = 'No';
    }
    else {
      Xposition = 670;
      clscss = 'red-edge'
      print = NodeIF;
      Result = 'Yes';
    }
    const newNode = {
      id: ID,
      counter: getCounter(),
      type: 'APICall',
      data: { label: print },
      position: { x: Xposition, y: counter },
      className: clscss,
    };
    setElements((es) => es.concat(newNode));


    let OldId = parseInt(ID.replace('dndnode_', '')) - 1;
    const newEdgeNode = {
      id: getEdgeId(),
      source: `dndnode_${OldId}`,
      target: ID,
      type: 'smart',
      animated: true,
      style: { stroke: '#fff' },
      className: 'normal-edge',
    }

    console.log(newEdgeNode);
    setElements((es) => es.concat(newEdgeNode));

    let IDIf = getId();
    debugger;
    if (Result == 'Yes') {
      Xposition = 270;
      clscss = 'green-edge1';
      print = Node;
    }
    else {
      Xposition = 670;
      clscss = 'red-edge1'
      print = NodeIF;
    }
    const newNodeIF = {
      id: IDIf,
      counter: getCounter(),
      type: 'APICall',
      data: { label: print },
      position: { x: Xposition, y: counter },
      className: clscss,
    };
    setElements((es) => es.concat(newNodeIF));

    const newEdgeNodeIF = {
      id: getEdgeId(),
      source: `dndnode_${OldId}`,
      target: IDIf,
      type: 'smart',
      animated: true,
      style: { stroke: '#fff' },
      className: 'normal-edge',
    }
    setElements((es) => es.concat(newEdgeNodeIF));

  }, []);




  return (
    <div class="container-fluid pl-0 pr-0">
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              style={style}
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              onEdgeUpdate={onEdgeUpdate}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDoubleClick={Popup}
              onClick={onDragClick}
              deleteKeyCode={46}
            >
              <Controls />
            </ReactFlow>

            <Drag />
          </div>


        </ReactFlowProvider>
        <Modal show={showpopup}>
          <ApiPopup onCloseClick={onCloseClick} onExecuteClick={onExecuteClick}
            mode={Mode} />
        </Modal>

        <Modal show={showIFpopup}>
          <IfElseCondition onIFCloseClick={onIFCloseClick} onIFExecuteClick={onIFExecuteClick}
            mode={Mode} />
        </Modal>

      </div>
    </div>

  );
};

export default Flow;
