/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1a_signup_signin",
        forgotPassword: "b2c_1a_passwordreset",
        editProfile: "b2c_1a_profileedit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://srj20230818.b2clogin.com/srj20230818.onmicrosoft.com/b2c_1a_signup_signin",
        },
        forgotPassword: {
            authority: "https://srj20230818.b2clogin.com/srj20230818.onmicrosoft.com/b2c_1a_passwordreset",
        },
        editProfile: {
            authority: "https://srj20230818.b2clogin.com/srj20230818.onmicrosoft.com/b2c_1a_profileedit"
        }
    },
    authorityDomain: "srj20230818.b2clogin.com"
}