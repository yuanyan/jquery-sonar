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
            var $this = $(this);
            var pos = $this.position();
            var styles = {
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                width: $this.width(),
                height: $this.height(),
                borderRadius: $this.css('border-radius'), // border-radius
                zIndex: $this.css('z-index')-1, // z-index
                animation: 'sonarEffect 1.3s ease-out 75ms'
            };

            var $sonarEffect = $('<span></span>').css(styles);

            $this.hover(function(){
                $this.after($sonarEffect);
            }, function(){
                $sonarEffect.remove();
            })

        })
    };
})