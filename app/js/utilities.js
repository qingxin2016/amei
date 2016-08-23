/* jshint undef: true, unused: false */
/* global YT, CQ, google */

'use strict';

function helper() {
    //constructor
}

helper.prototype = {
    getExt : function(filename){//to get any image or file extension
        var ext = filename.split('.').pop();
        if(ext === filename) {return '';}
        return ext;
    },

    isMobileSafari: function() {
        return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
    },

    isSafari: function(){
        var isDesktopSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        return isDesktopSafari;
    },

    getTop: function(element){
        return parseInt($('.'+element).css('top'));
    },

    setCookie : function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + '; ' + expires;
    },

    getCookie : function (cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {c = c.substring(1);}
            if (c.indexOf(name) === 0) {return c.substring(name.length,c.length);}
        }
        return '';
    }
};