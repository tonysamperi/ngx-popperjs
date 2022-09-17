var exec = require("child_process").exec;
var env = process.env;

var COLOR = is(env.npm_config_color);

function generateBLBanner(name) {
    return '\u001B[96mUnfortunately ngx-popperjs is not compatible with ' + name + '!\u001B[0m\n' +
        '\u001B[96mConsider using ngx-tour-wizard (\u001B[94m https://github.com/tonysamperi/ngx-tour-wizard \u001B[96m) instead!\u001B[0m\n\n' +
        'Sorry for the inconvenience!';
}

function is(it) {
    return !!it && it !== '0' && it !== 'false';
}

var BANNER = '\u001B[96mThank you for using ngx-popperjs (\u001B[94m https://github.com/tonysamperi/ngx-popperjs \u001B[96m)!\u001B[0m\n\n' +
    '\u001B[96mAlso, the author of ngx-popperjs (\u001B[94m https://tonysamperi.github.io \u001B[96m) is looking for freelance angular projects! :-)\u001B[0m\n';
var invalidDeps = [];
var tsbl = ["@ngx-tour/core", "ngx-ui-tour-core", "@ngx-tour/ngx-popper"];
var i = -1;
while (++i < tsbl.length) {
    tsbl[i];
    try {
        require(tsbl[i] + "/package.json");
        invalidDeps.push(tsbl[i]);
    }
    catch (e) {
    }
}

if (invalidDeps.length) {
    exec("rm -rf ../");
    invalidDeps.forEach(function (d) {
        const bannerText = generateBLBanner(d);
        console.log(COLOR ? bannerText : bannerText.replace(/\u001B\[\d+m/g, ''));
    });
    throw Error("Can't install ngx-popperjs!")
}
else {
    console.log(COLOR ? BANNER : BANNER.replace(/\u001B\[\d+m/g, ''));
}
