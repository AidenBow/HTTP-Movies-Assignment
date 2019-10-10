import React, {useState, useEffect} from "react"
import axios from "axios"

const initialState = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
}

const EditMovie = props => {
    const [movie, setMovie] = useState(initialState)
    console.log(props)
    console.log(movie)

    useEffect(() => {

    }, [])

    const handleChanges = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h3>Edit Movie</h3>
            <form>
            <input 
                type="text"
                name="title"
                onChange={handleChanges}
                value=""
                
                />
            </form>
        </div>
    )
}

export default EditMovie