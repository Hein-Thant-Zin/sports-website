import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom"
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utilites/slugify";
import SideBar from "./SideBar";


const Players = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams(search);
  const [team, setTeam] = useState(searchParams.get('teamId'));

  useEffect(() => {
    if (search === '') {
      searchParams.delete('teamId');
      setTeam(null);
    }
    else {
      setTeam(searchParams.get('teamId'));
    }
  }, [search]);
  
  const { response: names, loading } = usePlayerNames(team);
   
    if (loading) return null;
  
  return (
    <section className="py-16">
      <div className="container flex items-center gap-6 mx-auto">
        
        <SideBar title='Players' list={names} />
        
        <Outlet />
     </div>
    </section>
  )
}

export default Players
