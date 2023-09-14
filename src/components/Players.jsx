import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom"
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utilites/slugify";


const Players = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams(search);
  const [team, setTeam] = useState(searchParams.get('teamId'));
  const { response : names, loading } = usePlayerNames(team);
  
  if (loading) return null;

  return (
    <section>
      <div className="container mx-auto">
        <TopBar title='Players'  list={names} />
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
  console.log(location);
  return (
    <li>
      <Link to={{ 
        pathname: to,
        search : location.search,
       }}>{children}</Link>
    </li>
  )
}