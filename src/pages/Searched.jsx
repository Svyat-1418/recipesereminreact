import React, {useEffect, useState} from 'react';
import {requests} from "../api/requests";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";


function Searched(props) {
    const [searched, setSearched] = useState([])
    let params = useParams()


    const getSearched = async (name) => {
        try {
            // const data = await fetch(`${requests.fetchSearch}&query=${name}`)
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=52c7740e405f4023a6159810e3895428&query=${name}`)

            const recipes = await data.json()

            setSearched(recipes.results)
            console.log(recipes.results)
        } catch (error) {
            console.log("Ошибка Router: " + error)
        }

    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);


    return (
        <Grid>
            {searched.map(e => {
                return (
                    <Card key={e.id}>
                        <Link to={'/recipe/' + e.id}>
                            <img src={e.image} alt={e.title}/>
                            <h4>{e.title}</h4>
                        </Link>
                    </Card>

                )
            })}
        </Grid>
    )
}

export default Searched;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem
`

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;

    a {
      text-decoration: none;
    }

    h4 {
      text-align: center;
      padding: 1rem;
    }
  }
`








