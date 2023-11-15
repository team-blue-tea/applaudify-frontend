import { getAllApplauds, getAllMembers } from '@/libs/DB';
import { getServerSession } from 'next-auth';
// import { useRouter } from 'next/navigation';
import CardForHome from '@/components/CardForHome/CardForHome';
import Header from '@/components/Header/Header';
import NewMemberCheck from '@/components/NewMemberCheck/NewMemeberCheck';

const Home = async () => {
  const applauds = await getAllApplauds();
  // const session = await getServerSession();
  // const router = useRouter();

  // if (!session) {
  //   router.push('/landing');
  // }

  return (
    <div className='flex flex-col gap-10 mt-4'>
      <Header />
      <NewMemberCheck />
      <main className='flex flex-col gap-8 mt-1 mx-10'>
        <h1 className='small-header'>👏 Spotlights</h1>
        <CardForHome applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
