// import useArticle from '@/hooks/useArticle';
import useArticle from '../hooks/useArticle';
import React from 'react'
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const Article = () => {
    const { teamId, articleId } = useParams();
    const { response: article, loading } = useArticle({teamId,articleId});
    // console.log({article});
    if (loading) return <FadeLoader color="#ffffff"/> 
    
  return (
    <section className='grow'>
        <article>
              <h1 className='header-md'>{article.title }</h1>
              <p className='mt-3 text-xl '>{article.body}</p>
       </article>
    </section>
  )
}

export default Article
