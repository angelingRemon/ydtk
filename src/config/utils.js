
/*==========================类操作==========================*/

export function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export function addClass(obj, cls) {
  if (!hasClass(obj, cls)) obj.className += " " + cls;
}

export function removeClass(obj, cls) {
  if (hasClass(obj, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
  }
}

export function toggleClass(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls);
  } else {
    addClass(obj, cls);
  }
}

/*==========================日期格式化==========================*/

//格式化时间
Date.prototype.format = function(_format) {

    var format = _format || "yyyy-MM-dd hh:mm"

    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
};