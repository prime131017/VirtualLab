import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {

    const response = "http://localhost:3001/news";


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get(response)
            .then(data => {
                setArticles(data.data);
            })
    }, []);


    return (
        <div className='wrapper_article'>
            {articles.map(article => {
                return (
                    <>
                        <div className="wrapper_card">
                            <div className='wrapper_img'>
                                <img src={article.imageUrl} alt="" />
                            </div>
                            <div className="wrapper_title">
                                <h4>{article.title}</h4>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    )
}

export default Articles;