import useTeamArticles from "../hooks/useTeamArticles";
import { FadeLoader } from "react-spinners";
import { Outlet, useParams } from "react-router-dom";
import SideBar from "./SideBar";

const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamArticles(teamId);
  if (loading) return <FadeLoader color="#ffffff" />;
  // console.log({ articles });

  return (
    <section className="py-16 mx-4">
      <div className="container flex items-center gap-6 mx-auto">
        <SideBar
          title="Articles"
          list={articles.map((article) => article.title)}
        />

        <Outlet />
      </div>
    </section>
  );
};

export default Articles;
