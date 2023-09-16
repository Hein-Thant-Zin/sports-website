import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom"
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utilites/slugify";


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
      <div className="container mx-auto">
        
        <TopBar title='Players' list={names} />
        
        <Outlet />
     </div>
    </section>
  )
}

export default Players

function TopBar({title,list}) {
  return (
    <section className="mx-auto text-center">
      <h3 className="header">{title}</h3>
      <ul className="flex items-center justify-center max-w-3xl gap-4 mx-auto mt-4">
        
        {list.map((item) => (
          <CustomLink key={item} to={`${slugify(item)}`}>
            {item.toUpperCase()}
          </CustomLink> 
        ))}
        
      </ul>
     </section>
   )
}

function CustomLink({ children, to }) {
  
  const location = useLocation();
  const playerId = location.pathname.split('/')[2];
  const matched = playerId === to;

  return (
    <li className="transition hover:font-bold">
      <Link className={matched ? 'font-extrabold' : ''} to={{
        pathname: to,
        search: location.search,
      }}>{children}{matched ? '✨' : null}</Link>
    </li>
  );
}