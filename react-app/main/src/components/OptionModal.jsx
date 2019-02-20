import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.onRequestClose}
        contentLabel={props.title}
        closeTimeoutMS={200} 
        className="modal">
        <h3 className="modal__title">{props.title}</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.onRequestClose}>Okay</button>
    </Modal>
);
export default OptionModal;
// export default class OptionModal extends Component {
//     state = {
//         modalIsOpen: false
//     };

//     openModal = () => {
//         this.setState({ modalIsOpen: true });
//     }

//     afterOpenModal = () => {
//         // references are now sync'd and can be accessed.
//         this.subtitle.style.color = '#f00';
//     }

//     closeModal = () => {
//         this.setState({ modalIsOpen: false });
//     }

//     render() {
//         const customStyles = {
//             content: {
//                 top: '50%',
//                 left: '50%',
//                 right: 'auto',
//                 bottom: 'auto',
//                 marginRight: '-50%',
//                 transform: 'translate(-50%, -50%)'
//             }
//         };
//         return (
//             <div>
//                 <button onClick={this.openModal}>Open Modal</button>
//                 <Modal
//                     isOpen={this.state.modalIsOpen}
//                     onAfterOpen={this.afterOpenModal}
//                     onRequestClose={this.closeModal}
//                     style={customStyles}
//                     contentLabel="Example Modal"
//                 >

//                     <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
//                     <button onClick={this.closeModal}>close</button>
//                     <div>I am a modal</div>
//                     <form>
//                         <input />
//                         <button>tab navigation</button>
//                         <button>stays</button>
//                         <button>inside</button>
//                         <button>the modal</button>
//                     </form>
//                 </Modal>
//             </div>
//         );
//     }
// }