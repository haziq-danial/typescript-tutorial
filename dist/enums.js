"use strict";
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log(LoginError.Unauthorized);
    }
    else if (error == LoginError.NoUser) {
        console.log(LoginError.NoUser);
    }
    else if (error == LoginError.WrongCredentials) {
        console.log(LoginError.WrongCredentials);
    }
    else {
        console.log(LoginError.Internal);
    }
};
printErrorMsg(LoginError.WrongCredentials);
