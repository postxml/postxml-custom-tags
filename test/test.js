var plugin = require('../');
var postxml = require('postxml');
var expect = require('chai').expect;

var test = function (input, output, opts) {

   var proccessed = postxml(input, [plugin(opts)]);

   expect(proccessed).to.eql(output);
};

describe('poxtxml-custom-tags', function () {
    it('replace custom tag with div', function () {
        test(
            '<custom></custom>',
            '<div></div>',
            {}
        );
    });
    it('custom tag with -', function () {
        test(
            '<custom-tag></custom-tag>',
            '<div></div>',
            {}
        );
    });
    it('custom tag with attributes and text', function () {
        test(
            '<custom class="b-block" ng-click="init = 2">Text</custom>',
            '<div class="b-block" ng-click="init = 2">Text</div>',
            {}
        );
    });
    it('unclosed custom tag', function () {
        test(
            '<custom>',
            '<div></div>',
            {}
        );
    });
    it('do not replace html tags', function () {
        test(
            '<header></header>',
            '<header></header>',
            {}
        );
    });
    it('do not replace unclosed html tags', function () {
        test(
            '<br>',
            '<br>',
            {}
        );
    });
});
