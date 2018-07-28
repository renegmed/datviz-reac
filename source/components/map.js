import React, {Component} from 'react';

export default class Map extends Component {
    onClick(e) {
        let img = e.target,
            point = {x:e.offsetX, y:e.offsetY},
            latSize = img.height/180,
            lonSize = img.width/360,
            lat, lon;

        //console.log(point);

        if (!point.x) {
            point = {
                  x:e.pageX - e.target.offsetLeft,
                  y:e.pageY - e.target.offsetTop
            };                  
        }

        lat = (point.y - (img.height/2)) / -latSize;
        lon = (point.x - (img.width/2)) / lonSize;

        console.log(lat, lon);
    }
    
    render() {
        return <img onClick={this.onClick} 
           src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Earthmap1000x500compac.jpg" />;
    }
}