var pulse = (function() {
    'use strict'
    return function(el) {
        if (!el) return;
        var animDuration = 1200;
        var d = 0;
        var i = 0;
        var s = '';
        var str = el.textContent || el.innerText;
        str = str.trim();
        var strLen = str.length;
        el.innerHTML = '';
        for (;i<strLen;i++) {
            var c = str.substr(i,1);
            d = ~~((i*animDuration)/strLen);
            var tn = document.createTextNode(c);
            if (c.match(/[^ ]/i) === null) {
                el.appendChild(tn);
            } else {
                var e = document.createElement('span');
                e.setAttribute('style', 'animation-delay: '+d+'ms');
                e.className = 'pulse';
                e.appendChild(tn);
                el.appendChild(e);
            }
        }
    };
}());
