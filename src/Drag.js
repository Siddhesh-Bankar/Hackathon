import { Modal } from "react-bootstrap";
import logo from "../src/assets/images/WorkFlow.png";
import './App.css';
import { Component } from 'react';
import { Button } from "primereact/button";
class Drag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            Mode: '',
            newNode: [],
            tasks: [
                { id: 1, name: "Text", className: "drag-box" },
            ],
            jsonList: [],
        };
    }
    componentDidMount() {
    }
   
    hideModal = (hide) => {
        this.setState({
            showModal: hide,
        });
    }
    

      onClick=()=>{
        this.props.history.push("/Properties");
      }
    
    render() {
        const onDragStart = (event, nodeType, name) => {
            event.dataTransfer.setData('application/reactflow', name);
            event.dataTransfer.effectAllowed = 'move';
            // this.state.jsonList.push(nodeType);
            this.setState({
                node: name
            })
        };
        const onExecuteClick = (name) => {
            const filename = localStorage.getItem("name");
        }
        return (
            <div>
                <div className="drag" style={{ width: "100%" }}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img style={{ width: "200px" }} src={logo} />
                        </div>                       
                    </div>
                </div>
                
                <div>
                    {
                        this.state.tasks.map((task, index) => {
                            return (
                                <>
                                    <div className="display-t-cards">
                                        <div className={task.className} onDragStart={(event) => onDragStart(event, task, "APICall")} onClick={this.executeAPI} draggable>
                                            <div>
                                                <h6 className='mt-3'>API Call</h6></div>
                                        </div>
                                    </div>
                                    <div className="display-t-cards1">
                                        <div className={task.className} onDragStart={(event) => onDragStart(event, task, "If-Else")} draggable>
                                            <div>
                                                <h6 className='mt-3'>If-Else</h6></div>
                                        </div>
                                    </div>
                                   
                                </>
                            )
                        })
                    }

                </div>
                
            </div>
        )
    }
}
export default Drag;