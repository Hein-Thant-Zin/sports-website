import { Link, useParams } from "react-router-dom";
import usePlayer from '../hooks/usePlayer'

export default function Player() {
    const { playerId } = useParams();


  const { response : player, loading } = usePlayer(playerId);
// console.log(response);
  // console.log({player});  
  if (loading) return null; 
  if (!player) return null;

    
  return (
    <section className="container mx-auto text-center">
      <img className="w-32 mx-auto mt-5 transition border rounded-md shadow-sm aspect-square border-gray-50"  src={player.avatar} alt={`${player.name}'s avater`} />
      <h2 className="mt-4 header">{player.name}</h2>
      <ul className='mt-4 space-y-2 text-xl text-center'>
             <li>Team - <Link to={`/${player.teamId}`} >{player.teamId}</Link></li>
             <li>Position - <span>{player.position}</span></li>
             <li>PPG - <span>{player.ppg }</span></li>
     </ul>
    </section>
  )
}