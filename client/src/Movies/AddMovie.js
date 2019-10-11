import React, {useState} from "react"
import axios from "axios"

const initialState = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
}

const AddMovie = () => {
    const [movie, setMovie] = useState(initialState)

    const handleChanges = (e) => {
        if (e.target.name !== "stars"){
        setMovie({ ...movie, [e.target.name]: e.target.value})
        } else {
            setMovie({ ...movie, [e.target.name]: [e.target.value]})
            console.log(movie.stars)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        setMovie({...movie, id: Date.now()})
        axios
            .post(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h3>Add Movie</h3>
            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                onChange={handleChanges}
                value={movie.title}
                placeholder="title"
            />
            <input 
                type="text"
                name="director"
                onChange={handleChanges}
                value={movie.director}
                placeholder="director"
            />
            <input 
                type="text"
                name="metascore"
                onChange={handleChanges}
                value={movie.metascore}
                placeholder="metascore"
            />
            <input 
                type="text"
                name="stars"
                onChange={handleChanges}
                value={movie.stars}
                placeholder="stars"
            />
            <button type="submit">Submit Movie</button>
            </form>
        </div>
    )
}

export default AddMovie