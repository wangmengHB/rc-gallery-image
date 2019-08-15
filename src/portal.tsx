import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Gallery from './gallery'

const root = document.createElement('div');
root.id = 'gallery-container';
document.body.appendChild(root);


const list: string[] = [];
const ref: any = ReactDOM.render(<Gallery imgList={list}/>, root);

export function attachToGallery(src: string) {
  if (list.indexOf(src) === -1) {
    list.push(src); 
  }
}

export function showGallery(src: string) {
  

  ReactDOM.render(<Gallery imgList={list}/>, root);
  if (!!ref) {
    (ref as any).setPos(src);
    (ref as any).show();
  }

}








