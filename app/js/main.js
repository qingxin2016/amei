/* jshint undef: true, unused: false */
/* global YT, CQ, google */

'use strict';

function app() {
    //constructor
}
app.prototype = {
    UI : function () { //all UI's events
        var that = this;
    },

    init : function(){
        this.UI();
    }
};


$(function(){
    var myApp =  new app();
    myApp.init();
});