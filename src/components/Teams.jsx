import { Outlet, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import useTeamNames from "../hooks/useTeamNames";

const Teams = () => {
  const { response: teamNames, loading } = useTeamNames();
  // console.log({teamNames});
  if (loading) return null;
  return (
      <section className="py-16">
      <div className="container flex items-center gap-6 mx-auto">
        <SideBar title='Teams' list={teamNames} />
        <Outlet />
      </div>
      </section>
  )
}

export default Teams
