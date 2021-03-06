import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-800">
      <Head>
        <title>E-Sports App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <button className="py-2 text-white rounded-md px-7 bg-rose-500">
          <Link href="http://localhost:3000/api/auth/login">
            <a>Login</a>
          </Link>
        </button>
      )}

      {user && (
        <div className="flex flex-col justify-center">
          <p className="pb-2 text-white">Welcome {user.name}!</p>
          <button className="py-2 text-white rounded-md px-7 bg-rose-500">
            <Link href="http://localhost:3000/api/auth/logout">
              <a>Logout</a>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
