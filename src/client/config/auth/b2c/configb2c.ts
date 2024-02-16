import { Configuration } from "@azure/msal-browser";

const b2cPolicies = {
    names: {
        signUpSignIn: import.meta.env.VITE_APP_B2C_POLICY_NAME,
        resetPassword: import.meta.env.VITE_APP_B2C_RESET_PASS_POLICY_NAME,
    },
    authorities: {
        signUpSignIn: {
            authority: import.meta.env.VITE_APP_B2C_POLICY_SIGN,
        },
        resetPassword: {
            authority: import.meta.env.VITE_APP_B2C_POLICY_RESET_PASSWORD,
        },
    },
    authorityDomain: import.meta.env.VITE_APP_B2C_AUTHORITY,
};

export const msalConfigb2c: Configuration = {
    auth: {
        clientId: import.meta.env.VITE_APP_B2C_CLIENT_ID,
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: import.meta.env.VITE_APP_B2C_REDIREC_URI,
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    // More configuration here
};

export const loginRequestb2c = {
    scopes: [
        import.meta.env.VITE_APP_B2C_READ_SCOPE,
        import.meta.env.VITE_APP_B2C_WRITE_SCOPE,
    ],
};
