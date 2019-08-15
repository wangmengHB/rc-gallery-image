import * as React from 'react';


export interface GalleryProps {
  imgList: string[];
}

export interface GalleryState {
  visible: boolean;
  currentIndex: number;
}


export default class Gallery extends React.Component<GalleryProps>{

  state = {
    visible: false,
    currentIndex: 0,
  }

  setPos  = (src: string) => {
    const {imgList} = this.props;
    const currentIndex = imgList.indexOf(src);
    this.setState({
      currentIndex,
    })
  }

  next = () => {
    const { currentIndex } = this.state;
    const { imgList } = this.props;
    let next = currentIndex;
    if (currentIndex >= imgList.length - 1) {
      next = 0;
    } else {
      next = currentIndex + 1;
    }

    this.setState({
      currentIndex: next,
    });
  }


  show = () => {
    this.setState({
      visible: true,
    })
  }

  handleClick = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { imgList } = this.props;
    const { visible, currentIndex } = this.state;
    

    if (!visible) {
      return null;
    }
    
    if (!Array.isArray(imgList) || imgList.length === 0) {
      return null;
    }
    if (!imgList[currentIndex]) {
      return null;
    }

    return (
      <div 
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
        
      >
        <div 
          style={{ width: '100%', height: '100%', background: 'rgba(0,0,0, 0.8)'}} 
          onClick={this.handleClick} 
        />
        
        <a>
        <img 
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }} 
          src={imgList[currentIndex]}
          onClick={this.next} 
        />
        </a>
      </div>
    );
  }

}
