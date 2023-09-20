/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_susi",
        forgotPassword: "b2c_1_reset_password",
        editProfile: "b2c_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://srj20230818.b2clogin.com/srj20230818.onmicrosoft.com/b2c_1_susi",
        },
        forgotPassword: {
            authority: "https://srj20230818.b2clogin.com/srj20230818.onmicrosoft.com/b2c_1_reset_password",
        },
        editProfile: {
            authority: "https://srj20230818.b2clogin.com/srj20230818.onmicrosoft.com/b2c_1_edit_profile"
        }
    },
    authorityDomain: "srj20230818.b2clogin.com"
}