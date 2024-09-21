import React from 'react'
import { uuid, v4 } from 'uuidv4';
import { W3SSdk } from '@circle-fin/w3s-pw-web-sdk'
import { useCallback, useEffect, useState } from 'react'
// import { GoogleLogin } from "@react-oauth/google";
import { Alert } from 'react-bootstrap';

let sdk
const Signup = () => {
    const [userId, setUserId] = useState('')
    const [appId, setAppId] = useState()
    const [deviceToken, setDeviceToken] = useState()
    const [deviceEncryptionKey, setDeviceEncryptionKey] = useState()
    const [challengeId, setChallengeId] = useState()
    const [email, setEmail] = useState()
    const [isLoading, setIsLoading] = useState(true)

    // function performGoogleLogin() {
    //     if (!this.configs?.loginConfigs?.google) {
    //         void this.onLoginComplete?.(
    //             {
    //                 code: 155140,
    //                 message: 'Please provide the Google social login configurations.',
    //             },
    //             undefined,
    //         )

    //         return
    //     }

    //     const { clientId, redirectUri } = this.configs.loginConfigs.google

    //     const {
    //         url = '',
    //         state = '',
    //         nonce = '',
    //     } = generateOauthUrlWithParams(
    //         SocialLoginProvider.GOOGLE,
    //         clientId,
    //         redirectUri,
    //     ) || {}

    //     this.saveOAuthInfo(SocialLoginProvider.GOOGLE, state, nonce)
    //     this.window.location.href = url
    // }

    // function generateOauthUrlWithParams(
    //     provider,
    //     id,
    //     redirectUri,
    // ) {
    //     const state = uuidv4()

    //     if (provider === SocialLoginProvider.GOOGLE) {
    //         const scope = encodeURIComponent(
    //             'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    //         )
    //         const responseType = encodeURIComponent('id_token token')
    //         const nonce = uuidv4()

    //         return {
    //             url: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${id}&redirect_uri=${encodeURIComponent(
    //                 redirectUri,
    //             )}&scope=${scope}&state=${state}&response_type=${responseType}&nonce=${nonce}`,
    //             state,
    //             nonce,
    //         }
    //     } else if (provider === SocialLoginProvider.FACEBOOK) {
    //         const scope = encodeURIComponent('email')

    //         return {
    //             url: `https://www.facebook.com/v13.0/dialog/oauth?client_id=${id}&redirect_uri=${encodeURIComponent(
    //                 redirectUri,
    //             )}&scope=${scope}&state=${state}&response_type=token`,
    //             state,
    //         }
    //     }
    // }


    const func = async () => {
        setIsLoading(true)
        const getAppId = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                authorization: 'Bearer TEST_API_KEY:8a04058cf617803f1c28920dcee85191:74658d50c6806658368b503ac2f0abe0'
            }
        };

        await fetch('https://api.circle.com/v1/w3s/config/entity', getAppId)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setAppId(response.data.appId)
            })
            .catch(err => console.error(err));

        // console.log(res)

        // setAppId(res.data.appId)

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer TEST_API_KEY:8a04058cf617803f1c28920dcee85191:74658d50c6806658368b503ac2f0abe0'
            },
            body: JSON.stringify({
                deviceId: '55e645fa-ea41-4303-91a9-553dc01f3fbc',
                idempotencyKey: userId
            })
        };
        await fetch('https://api.circle.com/v1/w3s/users/social/token', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setDeviceToken(response.data.deviceToken)
                setDeviceEncryptionKey(response.data.deviceEncryptionKey)
            })
            .catch(err => {
                console.error(err)
                // Alert("User already exists")
            });

        setIsLoading(false)
    }

    var v;

    function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };

    const handleCredentialResponse = (response) => {
        // console.log(Response)

        console.log(JSON.stringify(parseJwt(response.credential)));
        v = (parseJwt(response.credential))
        console.log(v.email)
        setEmail((v.email))
    }

    const initialiseUserId = () => {
        setUserId(uuid());
    }


    return (
        <div>

            <button onClick={initialiseUserId}>
                initialise userId
            </button>
            <button onClick={func}>
                click to enable google login
            </button>
            {/* {!isLoading && <GoogleLogin
                onSuccess={(Response) => {
                    console.log(Response);
                    // setData(Response)
                    handleCredentialResponse(Response)

                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />} */}
        </div>
    )
}

export default Signup