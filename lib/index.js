/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author liuxing
 * @date  14-12-30
 * @description
 *
 */

var types = require('./types');
console.log(Object.keys(types));
function type(filename) {
    var dot = filename.lastIndexOf('.');
    if ( dot < -1) {
      throw Error('File name is not right！');
    }
    var suffix = filename.substr(dot+1);
    var contentType = types[suffix];
    if (contentType == null) {
        throw Error('Document dose not support!');
    }
    return contentType;
}
module.exports = type;