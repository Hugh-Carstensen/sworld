// delaunay.js
// Created 08/07/2020: Benjamin Speno
// generate a graph of adjacent points using delaunay triangles
import Delaunator from 'delaunator';

function generateAdjacencyGraph (points) {
    const delaunator = Delaunator.from(points);
    const triangles = delaunator.triangles;
    var adjacencies = [];
    for (let i = 0; i < triangles.length; i += 3) {
        parseNodes(adjacencies, triangles[i], triangles[i + 1]);
        parseNodes(adjacencies, triangles[i], triangles[i + 2]);
        parseNodes(adjacencies, triangles[i + 1], triangles[i + 2]);
    }
    return adjacencies;
}

function parseNodes (adjacencies, node1, node2) {
    ensureNodeHasArray(adjacencies, node1);
    ensureNodeHasArray(adjacencies, node2);
    if(!adjacencies[node1].includes(node2)){
        adjacencies[node1].push(node2);
    }
    if(!adjacencies[node2].includes(node1)){
        adjacencies[node2].push(node1);
    }
}

//possibly extranious
function ensureNodeHasArray (adjacencies, node) {
    if(adjacencies.length <= node || adjacencies[node] == undefined){
        adjacencies[node] = [];
    }
}

export default generateAdjacencyGraph