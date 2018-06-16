import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/homePage.css';
import Navigationbar from '../../components/navbar';
import Datalist from '../../components/dataList';
import {loadDataApi} from "../../action/index";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount = () => {
        this
            .props
            .dispatch(loadDataApi("firstLoad", 10));
    }
    changeUrl = (endpoint) => {
        window.location = endpoint
    }
    render() {
        return (
            <div>
                <Navigationbar/>
                <h2 className="homeTitle">The Shoe Company</h2>
                <button id="currButton" onClick={() => this.changeUrl('changecurr')}>Currency Converter!!</button>
                <Datalist/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Homepage);