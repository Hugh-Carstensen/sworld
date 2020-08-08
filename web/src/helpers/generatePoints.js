// generatePoints.js
// Created 08/07/2020: Hugh Carstensen
// Generate random points using poisson disc sampling

function generatePoints (radius, regionX, regionY, packing) {
    var sampling = new PoissonDiskSampling({
        shape: [regionX, regionY],
        minDistance: radius,
        maxDistance: 2 * radius,
        tries: packing
    });
    
    return sampling.fill();
}

export default generatePoints
