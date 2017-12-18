import React from 'react';
import { Icon } from 'antd';
import { changetab } from '../Tabs/'
import { connect } from 'react-redux';


// class Buttons extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('first mount');
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('update');
//         return true;
//
//     }
//
//     render() {
//             if (this.props.storedKey === '1') {
//                 return (
//                     <Icon type="double-right" className="icon-dr" onClick={this.props.onChangeTab((parseInt(this.props.storedKey, 10) + 1).toString())} />
//                 );
//             } else if (this.props.storedKey === '3') {
//                 return (
//                     <Icon type="double-left" className="icon-dl" onClick={this.props.onChangeTab((parseInt(this.props.storedKey, 10) - 1).toString())} />
//                 );
//             } else {
//                 return (
//                     <React.Fragment>
//                         <Icon type="double-right" className="icon-dr" onClick={this.props.onChangeTab((parseInt(this.props.storedKey, 10) + 1).toString())} />
//                         <Icon type="double-left" className="icon-dl" onClick={this.props.onChangeTab((parseInt(this.props.storedKey, 10) - 1).toString())} />
//                     </React.Fragment>
//                 );
//             }
//     }
// }


const Buttons = ({storedKey, onChangeTab}) => {
    return (
        <React.Fragment>
            <Icon type="double-right" className="icon-dr" style={{display: storedKey === "3" ? "none" : "block"}}
                  onClick={onChangeTab((parseInt(storedKey, 10) + 1).toString())} />
            <Icon type="double-left" className="icon-dl" style={{display: storedKey === "1" ? "none" : "block"}}
                  onClick={onChangeTab((parseInt(storedKey, 10) - 1).toString())} />
        </React.Fragment>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        storedKey: state.tabKey
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeTab: (key) => () => dispatch(changetab(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
