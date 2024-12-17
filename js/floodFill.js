"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floodFill = floodFill;
function floodFill(image, sr, sc, color) {
    let isend = false;
    let row = image.length;
    let column = image[0].length;
    let updatedImage = image;
    let oldColor = image[sr][sc];
    if (image[sr][sc] == color) {
        return image;
    }
    else if (image[sr][sc] != color) {
        updatedImage[sr][sc] = color;
    }
    //right
    if (sc < column - 1) {
        if (image[sr][sc + 1] != color && image[sr][sc + 1] == oldColor) {
            floodFill(updatedImage, sr, sc + 1, color);
        }
    }
    //left
    if (sc > 0) {
        if (image[sr][sc - 1] != color && image[sr][sc - 1] == oldColor) {
            floodFill(updatedImage, sr, sc - 1, color);
        }
    }
    //down
    if (sr < row - 1) {
        if (image[sr + 1][sc] != color && image[sr + 1][sc] == oldColor) {
            floodFill(updatedImage, sr + 1, sc, color);
        }
    }
    //up
    if (sr > 0) {
        if (image[sr - 1][sc] != color && image[sr - 1][sc] == oldColor) {
            floodFill(updatedImage, sr - 1, sc, color);
        }
    }
    return updatedImage;
}
function floodFillGPT(image, sr, sc, color) {
    var _a;
    if (image[sr][sc] === color) {
        return image;
    }
    let prevColor = image[sr][sc];
    const neighbours = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
    ];
    image[sr][sc] = color;
    for (let [rowSpan, colSpan] of neighbours) {
        if (((_a = image[sr + rowSpan]) === null || _a === void 0 ? void 0 : _a[sc + colSpan]) === prevColor) {
            floodFill(image, sr + rowSpan, sc + colSpan, color);
        }
    }
    return image;
}
;
