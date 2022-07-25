import { Button } from "primereact/button";
import { Component } from 'react';
import { withRouter } from 'react-router';
class ApiPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToggleSideBar: true,
            ExecuteAPIList: [],
            method: '',
            reqType: '',
            url: '',
            body: '',

        };
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ method: e.target.value })
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    executeAPI = () => {
        if (this.state.method == 1) {
            var axios = require('axios');
            var config = {
                method: 'get',
                url: this.state.url,
                headers: {}
            };
            axios(config)
                .then((response) => {
                    console.log(response);
                    console.log(JSON.stringify(response.data));
                    if (response.status == 200) {
                        this.props.onExecuteClick('Yes');
                    }
                    else {
                        this.props.onExecuteClick('NO');
                    }
                    this.setState({
                        ExecuteAPIList: response.data,
                    });
                })
                .catch((error) => {
                    this.props.onExecuteClick('NO');

                });
        }
        else if (this.state.method == 2) {
            var axios = require('axios');
            var data = this.state.body;

            var config = {
                method: 'put',
                url: this.state.url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then((response) => {
                    if (response.status == 200) {
                        this.props.onExecuteClick('Yes');
                    }
                    else {
                        this.props.onExecuteClick('NO');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (this.state.method == 3) {
            var axios = require('axios');
            var data = this.state.body;

            var config = {
                method: 'post',
                url: this.state.url,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    if (response.status == 200) {
                        this.props.onExecuteClick('Yes');
                    }
                    else {
                        this.props.onExecuteClick('NO');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (this.state.method == 4) {
            var axios = require('axios');

            var config = {
                method: 'delete',
                url: this.state.url,
                headers: {}
            };

            axios(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    if (response.status == 200) {
                        this.props.onExecuteClick('Yes');
                    }
                    else {
                        this.props.onExecuteClick('NO');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else{
            
        }

    }
    ToggleSideBar = () => {
        this.setState({
            ToggleSideBar: !this.state.ToggleSideBar,
        });
    };
    onCloseClick = () => {
        this.props.onCloseClick(false);
    };
    onSaveClick = () => {
        this.props.onCloseClick();
    }


    render() {
        return (
            <>
                <div class="modal-header" >
                    <h2>Properties Panel</h2>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-10">
                            <h6 class="font-weight-bold mb-3"></h6>
                            <h6 class="font-weight-bold mb-1">Request API Method</h6>
                            <div class="form-group">
                                <select class="form-control" id="dropdown" value={this.state.value} onChange={this.handleChange}>
                                    <option>Please select method</option>
                                    <option value="1">Get</option>
                                    <option value="2">Put</option>
                                    <option value="3">Post</option>
                                    <option value="4">Delete</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label className="form-label text-14 font-semibold text-grey mt-3">
                                    Request API URL
                                </label>
                                <input
                                    type="text"
                                    className="form-control text-14  font-semibold"
                                    id="url"
                                    name="url"
                                    placeholder="Please enter url"
                                    value={this.state.url}
                                    onChange={this.onChange}
                                    aria-describedby
                                />
                            </div>
                            <div class="form-group">
                                <label className="form-label text-14 font-semibold text-grey mt-3">
                                    Request API Body
                                </label>
                                <textarea className="form-control text-14  font-semibold"
                                    id="body"
                                    name="body"
                                    placeholder="Please enter request JSON"
                                    value={this.state.body}
                                    onChange={this.onChange} />
                            </div>
                        </div>

                    </div>

                </div>
                <div class="modal-footer">
                    <Button style={{ padding: 5 }} label="Execute"
                        onClick={this.executeAPI}
                    ></Button>&nbsp;
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
export default withRouter(ApiPopup);