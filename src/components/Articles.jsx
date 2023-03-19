import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Articles = () => {

    const src = "https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json";

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(src)
            .then(data => {
                console.log(data);
            })
    }, []);


    return (
        <>
            <div>
                {articles.map(article =>{
                    return (
                        <p>{article.title}</p>
                    );
                })}

            </div>
        </>
    )
}

export default Articles;