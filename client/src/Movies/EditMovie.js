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

    const id = props.match.params.id

    useEffect(() => { 
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => console.log(err.response));
    }, []);

    const handleChanges = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h3>Edit Movie</h3>
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
            <button type="submit">Submit changes</button>
            </form>
        </div>
    )
}

export default EditMovie