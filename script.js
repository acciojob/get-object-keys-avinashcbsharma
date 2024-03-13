let student = {
    name:"XYZ"
}

Object.prototype.getKeys = function() {
    const keys = [];
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
};