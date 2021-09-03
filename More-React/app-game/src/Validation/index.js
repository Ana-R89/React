import React, { useState } from 'react'



const Validation = () => {
    firstName: {
        value: 'firstname',
            error: null
    };
    lastName: {
        value: 'lastname',
            error: null
    };
    email: {
        value: 'email   ',
            error: null
    };


    return (
        ...
            { state.firstName.error !== null && (
                <p className="error">{state.firstName.error}</p>
            )
}
        ...
    ); 
}
