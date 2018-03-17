(function () {
    var key = 'shoppingCarKey';
    var DM = {
        getData: function () {
            if (localStorage.getItem(key)) {
                return JSON.parse(localStorage.getItem(key));
            } else {
                return [];
            }
        },
        saveData: function (obj) {
            if (obj) {
                localStorage.setItem(key, JSON.stringify(obj));
            }
        },
        clearData: function () {
            localStorage.setItem(key, "[]");
        }
    };
    window.DM = DM;
})();
