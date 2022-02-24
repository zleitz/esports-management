import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <div className="flex w-screen h-screen">
      <Head>
        <title>E-Sports App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <button className="justify-center items-center">
          <Link href="http://localhost:3000/api/auth/login">
            <a>Login</a>
          </Link>
        </button>
      )}

      {user && (
        <div>
          <p>Welcome {user.name}!</p>
          <Link href="http://localhost:3000/api/auth/logout">
            <a>Logout</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
