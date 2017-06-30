//This compoenent handles hte App template used on every page.
import React, {PropTypes} from 'react';
import Header from '../common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

App.propType = {
    children: React.PropTypes.object.isRequired, //ignore: linter ignore
    loading: React.PropTypes.bool.isRequired
};

export default App;