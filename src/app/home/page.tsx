import CardForHome from '@/components/CardForHome/CardForHome';
import Header from '@/components/Header/Header';
import NewMemberCheck from '@/components/NewMemberCheck/NewMemberCheck';

const Home = () => {
  return (
    <div className="flex flex-col gap-10 mt-4">
      <Header />
      <NewMemberCheck />
      <main className="flex flex-col gap-8 mt-1 mx-10">
        <h1 className="small-header">👏 Spotlights</h1>
        <CardForHome />
      </main>
    </div>
  );
};

export default Home;
