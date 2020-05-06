(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 40 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// export default function (itemNum) {
//     let size = itemNum || 15;
//     window.onresize = remSize;
//     remSize();
//     function remSize() {
//         let html = document.getElementsByTagName('html')[0], w = html.clientWidth;
//         html.style.fontSize = w / size+"px";
//     }
// };
