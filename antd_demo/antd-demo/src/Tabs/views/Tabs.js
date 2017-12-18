import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { changetab } from '../actions.js'
import Tech from './Technique.js'
import Education from './Education.js'
const TabPane = Tabs.TabPane;

const newTabs = ({storedKey, onChangeTab}) => {
    return (
        <Tabs activeKey={storedKey} onChange={(key) => { onChangeTab(key); }} type="card">
            <TabPane tab="Tab 1" key="1"><Tech /></TabPane>
            <TabPane tab="Tab 2" key="2"><Education /></TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
    );
};

// class newTabs extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props.storedKey);
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log(this.props.storedKey);
//         return (nextProps.storedKey !== this.props.storedKey);
//     }
//     render() {
//         return (
//             <Tabs activeKey={this.props.storedKey} onChange={(key) => { this.props.onChangeTab(key); }} type="card">
//                 <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
//                 <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
//                 <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
//             </Tabs>
//         );
//     }
// }

const mapStateToProps = (state, ownProps) => {
    return {
        storedKey: state.tabKey
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeTab: (key) => dispatch(changetab(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(newTabs);
