import { Link, useParams } from "react-router-dom";
import usePlayer from '../hooks/usePlayer'
import { FadeLoader } from "react-spinners";

export default function Player() {
  const { playerId } = useParams();
  
  const { response : player, loading } = usePlayer(playerId);
// console.log(response);
  // console.log({player});  
  if (loading) return  <FadeLoader className="text-center" color="#ffffff" />; 
  if (!player) return null;

    
  return (
    <section className="grow">
      <img className="w-24 mx-auto mt-5 transition border rounded-md shadow-sm aspect-square border-gray-50"  src={player.avatar} alt={`${player.name}'s avater`} />
      <h2 className=" header">{player.name}</h2>
      <ul className='text-center '>
             <li>Team - <Link to={`/${player.teamId}`} >{player.teamId}</Link></li>
             <li>Position - <span>{player.position}</span></li>
             {/* <li>PPG - <span>{player.ppg }</span></li> */}
      </ul>
      
      
    </section>
  )
}