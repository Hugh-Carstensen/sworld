// voronoi.js
// Created 8/7/2020: Benjamin Speno
// creates a Voronoi graph for a given set of points
import Voronoi from 'voronoi';

function voronoi (points, regionX, regionY) {
    var voronoi = new Voronoi();
    var regionBox = {xl: 0, xr: regionX, yt: 0, yb: regionY};
    //regionBox["xr"] = regionX;
    //regionBox["yb"] = regionY;
    document.write(regionBox.xl + ", " + regionBox.xr);
    
    var convertedPoints = [];
    for(let i = 0; i < points.length; i++){
        convertedPoints.push({x: points[i][0], y: points[i][1]});
    }
    
    return voronoi.compute(convertedPoints, regionBox);
}

export default voronoi