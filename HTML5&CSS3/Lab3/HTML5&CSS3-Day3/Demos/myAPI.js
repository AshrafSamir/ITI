//ployfill
if (!window.mylocalStorage) {
    window.mylocalStorage = {
        getItem: function (param) {
            console.log(param);
        }
    }
}
