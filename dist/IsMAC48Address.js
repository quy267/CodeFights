'use strict';

function isMAC48Address(inputString) {
    var regex = new RegExp('([A-F0-9]{2}-){5}[A-F0-9]{2}$', 'g');
    return regex.exec(inputString) != null;
}
//# sourceMappingURL=IsMAC48Address.js.map