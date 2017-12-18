import React from 'react';
import { Popover, Button, Spin} from 'antd';
import { view as Dialog } from '../../Dialog/';
import { actions as dialogActions } from '../../Dialog/';
import { connect } from 'react-redux';

const Tech = ({ onshowDialog }) => {
    const content = (title) => {
        return (
            <Button icon="search" onClick={onshowDialog(title)}>Search on website</Button>
        );
    };
    return (
        <React.Fragment>
        <Dialog />
        <Popover content={content('Javascript')}>
        <Button type="primary">Javascript</Button>
        </Popover>
        <Popover content={content('React')}>
        <Button type="primary">React</Button>
        </Popover>
        <Popover content={content('Redux')}>
        <Button type="primary">Redux</Button>
        </Popover>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onshowDialog: (title) => () => dispatch(dialogActions.showmodal(title, 'loading', <Spin />))
    };
};

export default connect(null, mapDispatchToProps)(Tech);

// class Tech extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { visible: false };
//     }
//     showModal = () => {
//         this.setState({ visible: true });
//     }
//     handleCancel = (e) => {
//         console.log(e);
//         this.setState({ visible: false });
//     }
//
//     render() {
//         const content = (
//             <div>
//                 <Button icon="search" onClick={this.showModal}>Search on website</Button>
//                 <Modal
//                     title="Basic Modal"
//                     visible={this.state.visible}
//                     onCancel={this.handleCancel}
//                     footer={null}
//                 >
//                     <p>Some contents...</p>
//                     <p>Some contents...</p>
//                     <p>Some contents...</p>
//                 </Modal>
//             </div>
//         );
//         return (
//             <Popover content={content}>
//               <Button type="primary">Javascript</Button>
//             </Popover>
//         );
//     }
// }
