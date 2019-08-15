import * as React from 'react';
import { attachToGallery, showGallery} from './portal';


export interface GalleryImageProps {
  src: string;
}

export default class GalleryImage extends React.PureComponent<GalleryImageProps> {

  handleClick = () => {
    showGallery(this.props.src);
  }

  componentDidMount() {
    const { src } = this.props;
    if (src) {
      attachToGallery(src);
    }
  }


  render() {
    const { src } = this.props;

    return (
      <a><img src={src} onClick={this.handleClick}/></a>
    )
  }

}

