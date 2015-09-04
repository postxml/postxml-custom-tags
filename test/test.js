var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('postxml-custom-tags', function () {
    it('replace custom tag with div', function () {
        test(
            '<custom></custom>',
            '<div></div>'
        );
    });
    it('custom tag with -', function () {
        test(
            '<custom-tag></custom-tag>',
            '<div></div>'
        );
    });
    it('custom tag with attributes and text', function () {
        test(
            '<custom class="b-block" ng-click="init = 2">Text</custom>',
            '<div class="b-block" ng-click="init = 2">Text</div>'
        );
    });
    it('unclosed custom tag', function () {
        test(
            '<custom>',
            '<div></div>'
        );
    });
    it('do not replace html tags', function () {
        test(
            '<header></header>',
            '<header></header>'
        );
    });
    it('do not replace unclosed html tags', function () {
        test(
            '<br>',
            '<br>'
        );
    });
    it('replace custom img tag', function () {
        test(
            '<image src="image.png"></image>',
            '<img src="image.png">',
            {
                src: 'img'
            }
        );
    });
    it('replace custom img tag (not another html5 tags with src attribute)', function () {
        test(
            '<image src="image.png"></image><script src="script"></script><video src="video"></video>',
            '<img src="image.png"><script src="script"></script><video src="video"></video>',
            {
                src: 'img'
            }
        );
    });
    it('replace custom link tag', function () {
        test(
            '<div href="image.png"></div>',
            '<a href="image.png"></a>',
            {
                href: 'a'
            }
        );
    });
    it('replace custom link tag (not another html5 tags with href attribute)', function () {
        test(
            '<div href="image.png"></div><link href="style">',
            '<a href="image.png"></a><link href="style">',
            {
                href: 'a'
            }
        );
    });
});
