
import { Link, useParams } from 'react-router-dom'
import useTeamNames from '../hooks/useTeamNames';
import useTeamArticles from '../hooks/useTeamArticles';
import useTeam from '../hooks/useTeam';
import { slugify } from '../utilites/slugify';
import { FadeLoader } from 'react-spinners';

function useTeamPageData(teamId){
 const{response : teamNames,loading : teamNamesLoading} = useTeamNames();

 const{response : articles ,loading : articleLoading } = useTeamArticles(teamId);

 const{response : team ,loading : teamLoading} = useTeam(teamId);

 return{
  teamNames,
  articles,
  team,
  loading: teamNamesLoading || articleLoading || teamLoading,
 }
}

const TeamsDetails = () => {
  const { teamId } = useParams();
  const {teamNames,articles,team,loading}=useTeamPageData(teamId);
  // console.log({teamNames});
  if(loading)return <p className='pt-40 text-center'><FadeLoader className='text-center' color='#ffffff'/></p>
  if(!teamNames?.includes(teamId)){
    return <p className='mt-5 text-center'>The {teamId} does not exist</p>
  }
 
  return (
    <section className='py-5'>
      <div className="container mx-auto text-center">
              {/* optional chaining */}
    <h1 className='text-5xl font-extrabold text-center'>{team.name}</h1>
    <h4 className='mt-5 '>
      <Link className='btn' to={{ pathname:'/players',search:`?teamId=${teamId}` }}>
        View Players
      </Link>
    </h4>

    <h4 className='my-2 header'>Championships</h4>
    <ul className='flex justify-center gap-4 mx-auto mt-4'>
      {team?.championships.map((item)=>(
        <li key={item}>{item}</li>
      ))}
    </ul>
    
    {team ? (
      <ul className='mt-4 space-y-2 text-xl text-center'>
      <li>Est. <span>{team.established}</span></li>
      <li>Manager - <span>{team.manager}</span></li>
      <li>Coach - <span>{team.coach }</span></li>
    </ul>
    ):null}
    
    <h2 className='py-2 header'>Blog Articles</h2>
        <ul className='mx-auto '>
          {articles?.map((item)=>(
            <li className='my-4 transition rounded-md ' key={item.id}>
              <Link className='px-5 py-2 rounded-lg shadow-lg bg-slate-500 hover:bg-slate-400' to={`articles/${slugify(item.title)}`}>{item.title}</Link>
              <p className='mt-2'>{new Date(item.date).toLocaleDateString()}</p>
            </li>
          ))}     
        {/* <li>Manager - <span>{team.manager}</span></li>
        <li>Coach - <span>{team.coach }</span></li> */}
       </ul>
      </div>
    </section>
  )
}

export default TeamsDetails
