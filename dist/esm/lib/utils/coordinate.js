export function getRandomCoordinate(_a) {
    var maxWidth = _a.maxWidth, maxHeight = _a.maxHeight;
    return [Math.floor(Math.random() * maxWidth), Math.floor(Math.random() * maxHeight)];
}
