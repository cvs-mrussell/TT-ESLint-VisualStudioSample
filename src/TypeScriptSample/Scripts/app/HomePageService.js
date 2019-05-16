var HomePageService = /** @class */ (function () {
    function HomePageService() {
        var _this = this;
        var button = document.getElementById('button');
        button.addEventListener('click', function () { return _this.onClick(); });
    }
    HomePageService.prototype.onClick = function () {
        var text = this.getText();
        this.displayText(text);
    };
    HomePageService.prototype.getText = function () {
        var el = document.getElementById('name');
        return "Hello " + el.value;
    };
    HomePageService.prototype.displayText = function (text) {
        var el = document.getElementById('output');
        el.innerText = text;
    };
    return HomePageService;
}());
var service = new HomePageService();
//# sourceMappingURL=HomePageService.js.map