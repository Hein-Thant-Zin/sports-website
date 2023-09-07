import { Link } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames"

const Home = () => {
  const { response: teamNames=[], loading } = useTeamNames();
  if (loading) return null;
  // console.log(teamNames);
  return (
    <section className='py-16'>
      <div className="container mx-auto bg-black">
      <h1 className='text-4xl font-semibold text-center'>Basketball League</h1>
      
      <h3 className="mt-4 text-2xl text-center">Choose your team</h3>

      <div>
      {teamNames ? teamNames.map((item) => (
          <Link key={item} to={`/${item}`}>
            <article>
              <p>{item}</p>
            </article>
          </Link>
        )):null}  
      </div>    
      </div> 
    </section>
  )
}

export default Home
