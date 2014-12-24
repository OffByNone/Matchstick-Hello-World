"use strict";
(function() {
    //if the below two lines are not executed the matchstick will think it 
    //failed to open the app and return to the default screen after a timeout
    
    var receiverManager = new ReceiverManager("~HelloWorld"); //create a new ReceiverManager with the same app id used in the sender
    receiverManager.open();
})();