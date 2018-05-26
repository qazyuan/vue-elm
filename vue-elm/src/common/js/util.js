export function getUrlParam() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
}

export function saveToLocal(id, key, val) {
    let seller = window.localStorage._seller_;
    if (!seller) {
        seller = {};
        seller[id] = {};
    } else {
        seller = JSON.parse(seller);
        if (!seller[id]) {
            seller[id] = {}
        }
    }
    seller[id][key] = val;
    window.localStorage._seller_ = JSON.stringify(seller);
}

export function getFromLocal(id, key, defaultVal) {
    let seller  = window.localStorage._seller_;
    if (!seller) {
        return defaultVal;
    }
    seller = JSON.parse(seller)[id];
    if (!seller) {
        return defaultVal;
    }

    let ret = seller[key];
    return ret || defaultVal;
}