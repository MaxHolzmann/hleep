import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const variables = ["NODE_ENV", "TEST"];
  const liveStatus = false;

  return (
    <>
      <div className='text-center'>
        <h1 className="text-6xl mt-10 font-bold">HLEEP.com</h1>
        {liveStatus ? (<h2>HLEEP is currently live! Tipping will display your username and your message live on stream.</h2>)
          : (<h2>HLEEP is <p className="text-red-500">not</p> live, tipping will not be shown on stream.</h2>)}
        <form>
          {/* styled Stripe payment form with tailwindcss*/}


        </form>
      </div >
    </>
  );
}
