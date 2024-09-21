import React, {useEffect, useState} from 'react'
// import { initiateUserControlledWalletsClient } from '@circle-fin/user-controlled-wallets';
import { uuid } from 'uuidv4';

// const client = initiateUserControlledWalletsClient({ apiKey: '8a04058cf617803f1c28920dcee85191:74658d50c6806658368b503ac2f0abe0', });

const Signup = () => {
    const [userId, setUserId] = useState('')

    // const initialiseUser = async () => {
    //     setUserId(uuid())
    //     const response = await client.createUser ({ userId: userId });
    //     console.log(response)
    // }

    // useEffect(() => {
    //     initialiseUser()
    // }, [])

    return (
        <div>signup</div>
    )
}

export default Signup