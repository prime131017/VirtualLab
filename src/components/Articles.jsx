import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './financial-market-news-blog-project.json';


const Articles = () => {

    async function getResponse() {
        let response = await fetch("https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json");
        let content = await response.json();
        console.log(content);
    
    }
    getResponse();
    
    
    const [articles, setArticles] = useState([]);

    //useEffect(() => {
    //     axios
    //         .get(src)
    //         .then(data => {
    //             console.log(data);
    //             setArticles(data);
    //         })
    // }, []);


    return (
            <div>
                {/* <h1>Articles</h1>
                {articles.map(article =>{
                    return (
                        <p>{article.title}</p>
                    );
                })} */}


            </div>
    )
}

export default Articles;