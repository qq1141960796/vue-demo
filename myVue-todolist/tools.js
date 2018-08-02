/**
 * 工具内，收集的轮子+自己的轮子
*/
// 数字+字母正则
export const regNumAbc = /^[0-9a-zA-Z]*$/g;
/**
 * 数组打乱排序，洗牌算法
 * @param { Array } array
 * @return { Array }
 */
export const shuffle = (array) => {
    const arr = array.concat();
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
/**
 * 项目清除本地存储，适合清除线上代码本地缓存
 * @param { String } sessionId 项目ID
 */
export const clearLocal = (sessionId) => {
    // 获取版本号的本地存储的值
    const item = localStorage.getItem(sessionId);
    // 如果本地没有该值，即为全新版本，清除并存储
    if (!item) {
        localStorage.clear();
        localStorage.setItem(sessionId, 'success');
    }
};
/**
 * 本地存储功能
 * @param { String } item 本地存储的id
 * @param { any } data 本地存储的详情 不传视为读取
 * @param { Number } time 有效时间，单位s 默认保存3天 259200s(取消了有效时间, 不作判断 2018-04-07)
 * @return { any } 视参数而定
 */
export const local = (item, data, time) => {
    // 获取本地保存的有效期
    // const validity = localStorage.getItem(`${item}-validity`);
    // 获取localStorage储存的时间
    // const localTime = new Date(localStorage.getItem(`${item}-time`));
    if (data) {
        // 存储
        localStorage.setItem(item, JSON.stringify(data));
        // 存储时间
        localStorage.setItem(`${item}-time`, new Date());
        // 存储有效时间
        localStorage.setItem(`${item}-validity`, time || 3600);
    } else {
        return JSON.parse(localStorage.getItem(item));
    }
    // else if (new Date() - localTime < validity * 1000) {
    //     // 有效期内
    //     return JSON.parse(localStorage.getItem(item));
    // }
    // 失效
    return null;
};
/**
 * 截取url参数 返回url参数对象
 * @param { String } key 关键字，不传返回所有对象
 * @param { String } url 链接 不传默认本地
 * @return { any }
 */
export const getSearchArgs = (key, url) => {
    const search = url ? url.slice(url.indexOf('?')) : window.location.search;
    const qs = search.length > 0 ? search.substring(1) : '';
    const args = {};
    const items = qs && (qs.split('&') || []);
    let item;
    const len = items.length;
    for (let i = 0; i < len; i += 1) {
        item = items[i].split('=');
        args[item[0]] = item[1];
    }
    if (key) {
        return args[key];
    }
    return args;
};
/**
 * 名字隐藏 2位隐藏后一位，其余只取首尾
 * @param { String } str 名字
 * @return { String }
 */
export const nameHide = (str) => {
    const arr = str.split('');
    if (arr.length === 1) {
        return '*';
    } else if (arr.length === 2) {
        return `${arr[0]}*`;
    }
    let name = '';
    arr.forEach((value, index) => {
        if (index !== 0 && index !== arr.length - 1) {
            name += '*';
        } else {
            name += value;
        }
    });
    return name;
};
/**
 * 电话号码隐藏4-7位
 * @param { String || Number } phone 电话号码
 */
export const phoneHide = (phone) => {
    const arr = phone.toString().split('');
    let str = '';
    arr.forEach((value, index) => {
        if (index > 2 && index < 7) {
            str += '*';
        } else {
            str += value;
        }
    });
    return str;
};
/**
 * 隐藏银行卡
 * @param { String } card 银行卡号
 * @return { String } 6666 **** **** **** 686
 */
export const bankCardHide = card => `${card.slice(0, 4)} **** **** **** ${card.slice(16)}`;
// 移动端弹窗，需要配合jquery
export const mobileTip = {
    // 当前是否存在弹窗
    hastips: null,
    /**
     * 初始化弹窗
     * @param { String } str 文本
     * @param { String } bgColor 背景颜色 默认 '#000'
     * @param { String } fontColor 文本颜色 默认 '#fff'
     */
    init(str, bgColor, fontColor) {
        if (this.hastips) {
            return;
        }
        const bg = bgColor || '#000';
        const font = fontColor || '#fff';
        const top = (window.innerHeight / 2) - 50;
        const el = `<div id="J-ylc-tips" style="background-color: ${bg};border-radius: 8px;width: 80%;padding: 10px 0;position: absolute;left: 10%; top: ${top}px; z-index: 800;color: ${font};text-align: center;font-size: 14px;">${str}</div>`;
        this.hastips = true;
        $('body').append(el);
        this.addEvent();
    },
    addEvent() {
        $('#J-ylc-tips').fadeIn('slow');
        setTimeout(() => {
            this.destroy();
        }, 1500);
    },
    removeEvent() {
        $('#J-ylc-tips').off();
    },
    destroy() {
        $('#J-ylc-tips').remove();
        this.removeEvent();
        this.hastips = false;
    }
};
/**
 * 快速排序 详见阮老师 http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 * @param { Aarray } arr 数组
 */
export const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    arr.forEach((value) => {
        if (value < pivot) {
            left.push(value);
        } else {
            right.push(value);
        }
    });
    return quickSort(left).concat([pivot], quickSort(right));
};
/**
 * 冒泡排序
 * @param { Array } array 数组
 */
export const bubbleSort = (array) => {
    const arr = array;
    for (let i = 0; i < arr.length - 1; i += 1) {
        // 比较相邻两数
        for (let j = i + 1; j < arr.length; j += 1) {
            // 大于则交换位置
            if (arr[i] > arr[j]) {
                const temp = arr[j];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
/**
 * 时间返回
 * @param { Date } time 时间 不传获取当前时间
 * @param { String } type 返回类型，不传返回对象合集 yyyy-mm-dd | yyyy-mm-dd hh:mm:ss
 */
export const returnDate = (time, type) => {
    const date = time ? new Date(time) : new Date();
    const timeObj = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hours: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        week: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
    };
    for (const key in timeObj) {
        if (key !== 'year' || key !== 'week') {
            if (timeObj[key] < 10) {
                timeObj[key] = `0${timeObj[key]}`;
            }
        }
    }
    switch (type) {
        case 'yyyy-mm-dd':
            return `${timeObj.year}-${timeObj.month}-${timeObj.day}`;
        case 'yyyy-mm-dd hh:mm:ss':
            return `${timeObj.year}-${timeObj.month}-${timeObj.day} ${timeObj.hours}:${timeObj.minute}:${timeObj.second}`;
        // no default
    }
    return timeObj;
};


/* 数组操作 */
/**
 * 删除数组中指定元素
 * @param { Array } arr 数组
 * @param { any } ele 指定元素
 * @return { Array }
 */
export const removeArrEle = (arr, ele) => {
    const index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};
/**
 * 数组去重
 * @param { Array } arr 数组
 * @return { Array }
 */
export const changeReArr = arr => [...new Set(arr)];
/**
 * 获取数组最大值
 * @param { Array } arr 数组
 * @return { Array }
 */
export const arrGetMax = arr => Math.max.apply(null, arr);
/**
 * 获取数组最小值
 * @param { Array } arr 数组
 * @return { Array }
 */
export const arrGetMin = arr => Math.min.apply(null, arr);
/**
 * 数组求和
 * @param { Array } arr 数组
 * @return { Array }
 */
export const arrGetSum = arr => arr.reduce((pre, cur) => pre + cur);
/**
 * 数组求平均数
 * @param { Array } arr 数组
 * @return { Array }
 */
export const arrGetAverage = arr => arrGetSum(arr) / arr.length;

/* 判断工具 */
/**
 * 判断是否为字符串
 * @param { any } any any
 * @return { Boolean }
 */
export const isString = any => Object.prototype.toString.call(any).slice(8, -1) === 'String';
/**
 * 判断是否为数字
 * @param { any } any any
 * @return { Boolean }
 */
export const isNum = any => Object.prototype.toString.call(any).slice(8, -1) === 'Number';
/**
 * 判断是否为boolean
 * @param { any } any any
 * @return { Boolean }
 */
export const isBoolean = any => Object.prototype.toString.call(any).slice(8, -1) === 'Boolean';
/**
 * 判断是否为函数
 * @param { any } any any
 * @return { Boolean }
 */
export const isFunction = any => Object.prototype.toString.call(any).slice(8, -1) === 'Function';
/**
 * 判断是否为数组
 * @param { any } any any
 * @return { Boolean }
 */
export const isArray = any => Object.prototype.toString.call(any).slice(8, -1) === 'Array';
/**
 * 判断是否为对象
 * @param { any } any any
 * @return { Boolean }
 */
export const isObject = any => Object.prototype.toString.call(any).slice(8, -1) === 'Object';
/**
 * 判断是否为null
 * @param { any } any any
 * @return { Boolean }
 */
export const isNull = any => Object.prototype.toString.call(any).slice(8, -1) === 'Null';
/**
 * 判断是否为Undefined
 * @param { any } any any
 * @return { Boolean }
 */
export const isUndefined = any => Object.prototype.toString.call(any).slice(8, -1) === 'Undefined';
/**
 * 判断是否为时间
 * @param { any } any any
 * @return { Boolean }
 */
export const isDate = any => Object.prototype.toString.call(any).slice(8, -1) === 'Date';
// 判断设备，返回设备系统类型
export const judgePhone = () => {
    const u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        return 'Android';
    } else if (u.indexOf('iPhone') > -1) {
        return 'iPhone';
    } else if (u.indexOf('iPad') > -1) {
        return 'iPad';
    } else if (u.indexOf('Windows Phone') > -1) {
        return 'Windows Phone';
    }
    return 'PC';
};
/**
 * 字符串检测类型
 * @param { String } str string
 * @param { String } type phone|tel|card|pwd|postal|email|english|chinese|lower|upper|username-ch
 * @return { String }
 */
export const checkStr = (str, type) => {
    switch (type) {
        // 银行卡
        case 'bankCard':
            return /^\d{16,19}$/.test(str);
        // 手机
        case 'phone':
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        // 座机
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        // 身份证
        case 'card':
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        // 密码长度在6~18之间
        case 'pwd':
            return /^[^]{5,17}$/.test(str);
        // 邮政编码
        case 'postal':
            return /[1-9]\d{5}(?!\d)/.test(str);
        // 邮箱
        case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        // 英文
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        // 中文
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        // 小写
        case 'lower':
            return /^[a-z]+$/.test(str);
        // 大写
        case 'upper':
            return /^[A-Z]+$/.test(str);
        // 中文名字长度
        case 'username-ch':
            return str.split('').length > 1;
        // 金钱
        case 'money':
            return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(str);
        // no default
    }
    return '判断不出来0.0';
};
/**
 * 去除空格
 * @param { String } str 字符串
 * @param { Boolean } all 是否去掉所有空格，默认删除左右
 * @return { String } result
 */
export const spaceTrim = (str, all) => {
    let result = str.replace(/(^\s+)|(\s+$)/g, '');
    if (all) {
        result = result.replace(/\s/g, '');
    }
    return result;
};
/**
 * 数字钱币改变
 * @param { String } str ex 100000
 * @return { String }
 */
export const moneyNum = (str) => {
    if (!str) {
        return str;
    }
    str = str.toString();
    const spootIndex = str.indexOf('.');
    let resultText;
    if (spootIndex !== -1) {
        str =  str.slice(0, str.indexOf('.'));
    }
    const arr = str.split('').reverse();
    let text = '';
    arr.forEach((value, index) => {
        text += value;
        if ((index + 1) % 3 === 0 && index !== arr.length - 1) {
            text += ',';
        }
    });
    if (spootIndex !== -1) {
        resultText = `${text.split('').reverse().join('')}.00`;
    } else {
        resultText = text.split('').reverse().join('');
    }
    return resultText;
};
/**
 * 脆弱的观察者模式
 */
export const event = {
    /**
     * 发布事件
     * @param { String } eventName 事件名
     * @param { Function } callBack 对应函数
     */
    pub(eventName, callBack) {
        if (!this.handles) {
            Object.defineProperty(this, 'handles', {
                value: {},
                enumerable: false,
                configurable: true,
                writable: true
            });
        }
        if (!this.handles[eventName]) {
            this.handles[eventName] = [];
            this.handles[eventName].push(callBack);
        } else {
            this.handles[eventName] = [callBack];
        }
    },
    // 调用事件
    sub(eventName) {
        if (this.handles[arguments[0]]) {
            for (let i = 0; i < this.handles[arguments[0]].length; i += 1) {
                this.handles[arguments[0]][i](arguments[1]);
            }
        }
    }
};
