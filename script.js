let student = {
    name:"XYZ"
}

student.prototype.getKeys = function() {
    const keys = [];
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
};