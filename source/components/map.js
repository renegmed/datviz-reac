import React, {Component} from 'react';

export default class Map extends Component {
    onClick(e) {
        let img = e.target,
            point = {x:e.offsetX, y:e.offsetY};

        console.log(point);

        if (point.x) {
            point = {
                  x:e.pageX - e.target.offsetLeft,
                  y:e.pageY - e.target.offsetTop
            };                  
        }

        console.log(point);
    }
    
    render() {
        return <img onClick={this.onClick} 
           src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Earthmap1000x500compac.jpg" />;
    }
}