import { Link } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const { response: teamNames, loading } = useTeamNames();
  if (loading)
    return (
      <div className="container py-16 text-center">
        <FadeLoader className="" color="#ffffff" />
      </div>
    );
  // console.log(teamNames);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="header">Basketball League</h1>

        <h3 className="mt-4 text-2xl text-center">Choose your team</h3>

        <div className="flex flex-wrap justify-center max-w-3xl gap-4 mx-auto my-4 ">
          {teamNames?.map((item) => (
            <Link className="shadow-lg flex-nowrap" key={item} to={`/${item}`}>
              <article className="px-24 py-2 transition rounded-md hover:bg-slate-500 bg-slate-400">
                <p className="text-center">{item}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
