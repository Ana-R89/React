import React, { useState } from 'react'

const Boxes = () => {

    const [squares, setNewSquares] = useState([])

    const [newSquare, setNewSquares] = useState({ color: '', dimensions: '' })


    const onChangeHandler = ({ target: { value, name } }) => {

        const currentSquare = {}
        currentSquare[name] = value
        setNewSquares({ ...newSquare, ...currentSquares })
    }

    const addButton = e => {
        e.preventDefault()
        setSquares([...squares, newSquare])


        setNewSquares({ color: '', dimensions: '' })
    }


    return (

        <div>
            <form onSubmit={addButton}>
                <div>
                    <label>Color</label>
                    <input value={newSquare.color} name='color' onChange={onChangeHandler} type="text" />
                </div>
                <div>
                    <label>Dimensiones</label>
                    <input value={newSquare.dimensions || ""} name='dimensions' onChange={onChangeHandler} type="number" />
                </div>
                <input type="submit" value="Add Box" />
            </form>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {squares.map(({ color, dimensions }, key) => {
                    const style = { backgroundColor: color, height: +dimensions, width: +dimensions, margin: 20 }
                    return < div key={key} style={style} />
                })}
            </div>

        </div >
    )

}

export default Boxes
