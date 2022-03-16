import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import {Link, useParams} from 'react-router-dom'
import {requests} from "../api/requests";



function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams()

    useEffect(() => {
        getCuisine(params.type)
        // console.log(params.type)
    }, [params.type]);


    const getCuisine = async (name) => {
        try {
            // const data = await fetch(`${requests.fetchSearch}&cuisine=${name}`)
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=52c7740e405f4023a6159810e3895428&cuisine=${name}`)
            const recipes = await data.json()

            setCuisine(recipes.results)
            console.log(recipes.results)
        } catch (error) {
            console.log("Ошибка Router: " + error)
        }

    }

    return (
        <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            {
                cuisine?.map(e => (
                    <Card key={e.id}>
                        <Link to={'/recipe/' + e.id}>
                            <img src={e.image} alt={e.title}/>
                            <h4>{e.name}</h4>
                        </Link>
                    </Card>

                ))
            }
        </Grid>
    );
}

export default Cuisine;


const Grid = styled(motion.div)`
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