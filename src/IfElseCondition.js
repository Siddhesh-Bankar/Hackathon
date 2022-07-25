import { Button } from "primereact/button";
import { Component } from 'react';
import { withRouter } from 'react-router';
import Flow from "./Flow";
class IfElseCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToggleSideBar: true,
            ExecuteAPIList: [],
            First: '',
            Second: '',
            txtIf: '',
            txtElse: '',
        };
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    executeAPI = () => {

        if (this.state.First == this.state.Second) {
            this.props.onIFExecuteClick('Yes', this.state.txtIf == '' ? 'Yes' : this.state.txtIf, this.state.txtElse == '' ? 'No' : this.state.txtElse);
        }
        else {
            this.props.onIFExecuteClick('No', this.state.txtIf == '' ? 'No' : this.state.txtIf, this.state.txtElse == '' ? 'No' : this.state.txtElse);
        }
    }
    ToggleSideBar = () => {
        this.setState({
            ToggleSideBar: !this.state.ToggleSideBar,
        });
    };
    onCloseClick = () => {
        this.props.onIFCloseClick(false);
    };
    onSaveClick = () => {
        this.props.onIFCloseClick();
    }

    render() {
        return (
            <>
                <div class="modal-header">
                    <h2>Properties Panel</h2>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="form-group">
                                <label className="form-label text-14 font-semibold text-grey mt-3">
                                    Enter first value
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-14  font-semibold"
                                    id="Password"
                                    name="First"
                                    placeholder=""
                                    onChange={this.onChange}
                                    value={this.state.First}
                                    aria-describedby
                                />

                                <label className="form-label text-14 font-semibold text-grey mt-3">
                                    Enter second value
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-14  font-semibold"
                                    id="Password"
                                    name="Second"
                                    placeholder=""
                                    onChange={this.onChange}
                                    value={this.state.Second}
                                    aria-describedby
                                />
                            </div>
                            <div class="form-group">
                                <label className="form-label text-14 font-semibold text-grey mt-3">
                                    Enter message if condition is true
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-14  font-semibold"
                                    id="Password"
                                    name="txtIf"
                                    onChange={this.onChange}
                                    value={this.state.txtIf}
                                    aria-describedby
                                />
                            </div>
                            <div class="form-group">
                                <label className="form-label text-14 font-semibold text-grey mt-3">
                                    Enter message for condition is false
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-14  font-semibold"
                                    id="Password"
                                    name="txtElse"
                                    onChange={this.onChange}
                                    value={this.state.txtElse}
                                    aria-describedby
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <Button style={{ padding: 5 }} label="Execute"
                        onClick={this.executeAPI}
                    ></Button>
                    <Button
                        label="Back"
                        style={{ padding: 5 }}
                        onClick={this.onSaveClick}
                    ></Button>
                </div>
            </>
        )
    }
}
export default withRouter(IfElseCondition);