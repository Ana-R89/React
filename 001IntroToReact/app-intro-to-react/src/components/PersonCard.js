import React from 'react'

class PersonCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { currentAge: null }
    }

    handleOnClick() {
        const {
            props: { age },
            state: { currentAge }
        } = this

        const initialAge = currentAge || age
        this.setState(() => ({ currentAge: initialAge + 1 }))
    }


    render() {
        console.log(this)
        const { firstName, lastName, age, hairColor } = this.props
        const { currentAge } = this.state
        return (
            <div>
                <h1> {firstName} {lastName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>

                <button onClick={this.handleOnClick}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </div>
        )
    }
}

export default PersonCard