!(function (factory) {
    if (typeof define === 'function') {
        define(['$'], factory);
    } else {
        factory($);
    }
})(function ($) {
    'use strict';
    var pluginName = 'sonar';

    $.fn[pluginName] = function(options){
        return this.each(function () {
            // ...


        })
    };
})