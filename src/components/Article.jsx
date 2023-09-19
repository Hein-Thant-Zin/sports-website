// import useArticle from '@/hooks/useArticle';
import useArticle from '../hooks/useArticle';
import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import Articles from './Articles';

const Article = () => {
  const { teamId, articleId } = useParams();
  const navigate = useNavigate();
    const { response: article, loading } = useArticle({teamId,articleId});
    // console.log({article});
    if (loading) return <FadeLoader color="#ffffff" /> 
    // if (article === null) return <Navigate to={`/${teamId}/articles`} />
  if (article === null) {
    navigate(`/${teamId}/articles`);
    }
    
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
