/**
 * 时间格式化
 * 用法：utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
 * @param {string} date - 当前时间
 * @param {string} format - 格式化之后的格式
 * @returns {string} - 返回格式化后的字符串
 */
function dateFormat(date, format) {
  if (format === undefined) {
    format = date;
    date = new Date();
  }
  var map = {
    M: date.getMonth() + 1, //月份
    d: date.getDate(), //日
    h: date.getHours(), //小时
    m: date.getMinutes(), //分
    s: date.getSeconds(), //秒
    q: Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
    var v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - 2);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });
  return format;
}

/**
 * 去除字符串中的空格
 * @param {string} str - 需要去除空格的字符串
 * @param {string} is_global - 是否全部去除 传g去除所有，不传去除前后
 * @returns {string} - 返回去除空格之后的字符串
 */
function trim(str, is_global) {
  var result;
  result = str.replace(/(^\s+)|(\s+$)/g, '');
  if (is_global && is_global.toLowerCase() === 'g') {
    result = str.replace(/\s/g, '');
  }
  return result;
}

/**
 * 获取url参数
 * @param {string} url - 需要查询参数的url
 * @param {string} param - 需要查询的参数key
 * @returns {string} - 需要查询参数的 value ，没有则是空
 */
function getUrlParam(url, param) {
  var r = new RegExp('\\?(?:.+&)?' + param + '=(.*?)(?:[?&].*)?$');
  var m = url.match(r);
  return m ? m[1] : '';
}

/**
 * 时间倒计时
 * @param {string} d - 截止的时间 Date.UTC(2030, 6, 27, 16, 34)
 * @param {object} o 
  - 倒计时的DOM对象集
  - sec: 显示秒数值的标签对象,
  - mini: 显示分钟数值的标签对象,
  - hour: 显示小时数值的标签对象,
  - day: 显示天数数值的标签对象,
  - month: 显示月份数值的标签对象,
  - year: 显示年数数值的标签对象
  */
function timeCountDown(d, o) {
  var f = {
    zero: function(n) {
      var n = parseInt(n, 10);
      if (n > 0) {
        if (n <= 9) {
          n = '0' + n;
        }
        return String(n);
      } else {
        return '00';
      }
    },
    dv: function() {
      d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
      var future = new Date(d),
        now = new Date();
      //现在将来秒差值
      var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60,
        pms = {
          sec: '00',
          mini: '00',
          hour: '00',
          day: '00',
          month: '00',
          year: '0'
        };
      if (dur > 0) {
        pms.sec = f.zero(dur % 60);
        pms.mini = Math.floor(dur / 60) > 0 ? f.zero(Math.floor(dur / 60) % 60) : '00';
        pms.hour = Math.floor(dur / 3600) > 0 ? f.zero(Math.floor(dur / 3600) % 24) : '00';
        pms.day = Math.floor(dur / 86400) > 0 ? f.zero(Math.floor(dur / 86400) % 30) : '00';
        //月份，以实际平均每月秒数计算
        pms.month = Math.floor(dur / 2629744) > 0 ? f.zero(Math.floor(dur / 2629744) % 12) : '00';
        //年份，按按回归年365天5时48分46秒算
        pms.year = Math.floor(dur / 31556926) > 0 ? Math.floor(dur / 31556926) : '0';
      }
      return pms;
    },
    ui: function() {
      if (o.sec) {
        o.sec.innerHTML = f.dv().sec;
      }
      if (o.mini) {
        o.mini.innerHTML = f.dv().mini;
      }
      if (o.hour) {
        o.hour.innerHTML = f.dv().hour;
      }
      if (o.day) {
        o.day.innerHTML = f.dv().day;
      }
      if (o.month) {
        o.month.innerHTML = f.dv().month;
      }
      if (o.year) {
        o.year.innerHTML = f.dv().year;
      }
      setTimeout(f.ui, 1000);
    }
  };
  f.ui();
}

/**
 * 合并对象
 * @param {object} obj1 - 对象一
 * @param {object} obj2 - 对象二
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) {
    obj3[attrname] = obj1[attrname];
  }
  for (var attrname in obj2) {
    obj3[attrname] = obj2[attrname];
  }
  return obj3;
}

/**
 * 生成随机数
 * @param {number} len - 生成随机字符串的长度
 * @returns {string} - 返回的随机字符串
 */
function randomString(len) {
  len = len || 6;
  var $chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var maxPos = $chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 格式化参数，将对象参数格式化成字符串
 * @param {object} data - 需要格式化的对象
 * @returns {string} 返回格式化的字符串
 */
function formatParams(data) {
  var arr = [];
  for (var name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }
  // arr.push(("v=" + Math.random()).replace(".",""));
  return arr.join('&');
}

/**
 * 是否为安卓手机
 * @return {Boolean} true安卓手机，false不是手机
 */
function isAndroid() {
  function _() {}
  _.WIN = window;
  _.NA = _.WIN.navigator;
  _.UA = _.NA.userAgent.toLowerCase();
  _.test = function(needle) {
    return needle.test(_.UA);
  };
  _.isAndroid = _.test(/android|htc/) || /linux/i.test(_.NA.platform + '');
  return _.isAndroid;
}

/**
 * 是否是String
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isString(object) {
  return Object.prototype.toString.call(object) === '[object String]';
}

/**
 * 是否是Number
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isNumber(object) {
  return Object.prototype.toString.call(object) === '[object Number]';
}

/**
 * 是否是Boolean
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

/**
 * 是否是Undefined
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isUndefined(object) {
  return Object.prototype.toString.call(object) === '[object Undefined]';
}

/**
 * 是否是Null
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isNull(object) {
  return Object.prototype.toString.call(object) === '[object Null]';
}

/**
 * 是否是Symbol
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isSymbol(object) {
  return Object.prototype.toString.call(object) === '[object Symbol]';
}

/**
 * 是否是Object
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isObject(object) {
  return Object.prototype.toString.call(object) === '[object Object]';
}

/**
 * 是否是Array
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isArray(object) {
  return Object.prototype.toString.call(object) === '[object Array]';
}

/**
 * 是否是Function
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

/**
 * 是否是Date
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
}

/**
 * 是否是RegExp
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

/**
 * 是否是Math
 * @param  {object}  object object
 * @returns {Boolean}        true/false
 */
function isMath(object) {
  return Object.prototype.toString.call(object) === '[object Math]';
}

/**
 * 是否来自微信内置浏览器，true是微信内置浏览器
 * @returns {Boolean} true/false
 */
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  // console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}

/**
 * 设置cookie
 * @param {string} name - 设置 cookie 的 key
 * @param {string} value - 设置 cookie 的 value
 * @param {number} seconds - 设置 cookie 的 时间(毫秒)
 */
function setCookie(name, value, seconds) {
  seconds = seconds || 0; //seconds有值就直接赋值，没有为0，这个跟php不一样。
  var expires = '';
  if (seconds != 0) {
    //设置cookie生存时间
    var date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = name + '=' + escape(value) + expires + '; path=/'; //转码并赋值
}

/**
 * 获取cookie
 * @param {string} name - 获取 cookie 的 key
 */
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';'); //把cookie分割成组
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]; //取得字符串
    while (c.charAt(0) == ' ') {
      //判断一下字符串有没有前导空格
      c = c.substring(1, c.length); //有的话，从第二位开始取
    }
    if (c.indexOf(nameEQ) == 0) {
      //如果含有我们要的name
      return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值
    }
  }
  return false;
}

/**
 * 清除cookie
 * @param {string} name - 清除 key 名为 name 的 cookie
 */
function clearCookie(name) {
  this.setCookie(name, '', -1);
}

/**
 * 封装 jquery 的 ajax
 * 使用前提是引入 jquery 或者 zepto
 * @param {string} url - 访问的后台url
 * @param {object} data - 传参
 * @param {string} type - 请求类型
 * @param {function} callback - 成功的回调
 * @param {function} errorCallBack - 失败的回调
 */
function request(url, data, type, callback, errorCallBack) {
  $.ajax({
    url: url,
    data: data,
    type: type,
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    success: function(data) {
      callback && callback(data);
    },
    error: function(error) {
      errorCallBack && errorCallBack(error);
    }
  });
}
