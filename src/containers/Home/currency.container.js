import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/form.css';
import {
    FormControl,
    FormGroup,
    Col,
    ControlLabel,
    Button,
    Form
} from 'react-bootstrap';
import Displayresult from '../../components/displayResult';
import {convertApiCall} from "../../action/index";

class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    getData = (e) => {
        this
            .props
            .dispatch(convertApiCall(this.sourceCurrency.value, this.destinationCurrency.value, this.sourceAmount.value));
    }
    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Source Amount
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                placeholder="Source Amount"
                                inputRef={input => this.sourceAmount = input}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Source Currency
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                placeholder="Source Currency"
                                inputRef={input => this.sourceCurrency = input}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Destination Currency
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type="text"
                                placeholder="Destination Currency"
                                inputRef={input => this.destinationCurrency = input}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={() => this.getData()}>Convert</Button>
                        </Col>
                    </FormGroup>
                </Form>;
                <Displayresult result={this.props.dataReducer.rate}/> {/* {this.member} */}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Currency);