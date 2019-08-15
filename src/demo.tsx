import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GalleryImage from './index';


const Demo = () => (
  <div>
    <GalleryImage src={'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=162642981,357793675&fm=26&gp=0.jpg'}/>
    <GalleryImage src={'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2112168051,2709108344&fm=26&gp=0.jpg'}/>
    <GalleryImage src={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=512848507,1192214965&fm=26&gp=0.jpg'}/>
    <GalleryImage src={'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2076590397,442943035&fm=26&gp=0.jpg'}/>
  </div>
)





const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

class Modal extends React.Component {
  
  el = document.createElement('div');

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      // this.props.children,
      (<Demo />),
      this.el,
    );
  }
}

class Parent extends React.Component<any, any> {
  
  state = {clicks: 0}

  handleClick = () => {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState((state: any) => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}










const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<Parent />, root);