import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam"
import { FadeLoader } from "react-spinners";

export default function Team() {
  const { teamId } = useParams();
  
  const { response : team, loading } = useTeam(teamId);
// console.log(response);
//   console.log({team});  
  if (loading) return <FadeLoader className="text-center" color="#ffffff" />; 
//   if (!team) return null;
    return (
        <section className="transition grow">
            <h2 className="mt-4 header">{team.name}</h2>
            <ul className='mt-4 space-y-2 text-xl text-center'>
                <li>Est. <span>{ team.established}</span></li>
                <li>Manager - <span>{team.manager}</span></li>
                <li>Coach - <span>{team.coach }</span></li>
                {/* <li>Win - <span>{team.wins }</span></li>
                <li>Losses - <span>{team.losses }</span></li> */}
        </ul>
        <h4 className="mt-3 text-center ">
          <Link className="btn"  to={`/${teamId}`}>{team.name}'s page</Link>
        </h4>
        
     
    </section>
    )
}