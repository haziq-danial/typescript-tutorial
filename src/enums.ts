// define error enums for different types of error

enum LoginError {
    Unauthorized ="unauthorized",
    NoUser = "nouser",
    WrongCredentials = "credentials",
    Internal = "internal"
}

const printErrorMsg = (error: LoginError): void => {
    if (error == LoginError.Unauthorized) {
        console.log(LoginError.Unauthorized);
    } else if (error == LoginError.NoUser) {
        console.log(LoginError.NoUser);
    } else if (error == LoginError.WrongCredentials) {
        console.log(LoginError.WrongCredentials);
    } else {
        console.log(LoginError.Internal);
    }
};

printErrorMsg(LoginError.WrongCredentials);