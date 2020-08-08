// generatePoints.js
// Created 08/07/2020: Hugh Carstensen
// Generate random points using poisson disc sampling

function generatePoints (seed, radius, regionX, regionY, packing) {
    var mersene = new MerseneTwister(seed);
    
    var sampling = new PoissonDiskSampling({
        shape: [regionX, regionY],
        minDistance: radius,
        maxDistance: 2 * radius,
        tries: packing
        
    }, mersene.random);
    
    return sampling.fill();
}

export default generatePoints
