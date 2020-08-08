// generatePoints.js
// Created 08/07/2020: Hugh Carstensen
// Generate random points using poisson disc sampling
import * as poisson from 'poisson-disk-sampling';
//import * as merseneTwist from 'mersenne-twister';
//import random_int from 'mersenne-twister';

function generatePoints (seed, radius, regionX, regionY, packing) {
//    var MersenneTwister = require('mersenne-twister');
//    var mersene = new MersenneTwister();
    
    var PoissonDiskSampling = require('poisson-disk-sampling');
    var sampling = new PoissonDiskSampling({
        shape: [regionX, regionY],
        minDistance: radius,
        maxDistance: 2 * radius,
        tries: packing
        
    } 
//   , mersene.random
    );
    
    return sampling.fill();
}

export default generatePoints
