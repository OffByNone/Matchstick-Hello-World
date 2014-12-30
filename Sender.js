"use strict";
(function() {
    var appid = "~HelloWorld"; //Unique id of your application, must start with a ~
    var matchstickIPAddress = "192.168.1.232"; //IP address of the matchstick
    var receiverAppUrl = "http://192.168.1.182:8080/matchstick-hello-world/Receiver.html"; //Url of the page to load on the receiver
    var senderDaemon = new SenderDaemon(matchstickIPAddress, appid); //comes from the sender api, is the object which will be used to communicate with the matchstick

    document.getElementById("launch").onclick  = function(){
        var timeout = -1; //after not communicating with the sender for this many milliseconds return to the default matchstick screen. -1 means don't timeout
        var useInterprocessCommunication = true; //not sure what this means for my application
        senderDaemon.openApp(receiverAppUrl, timeout, useInterprocessCommunication);
    };
    
    document.getElementById("close").onclick = function(){
        senderDaemon.closeApp();
    };
})();