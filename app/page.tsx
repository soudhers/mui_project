// 'use client';

// import { getProviders, signIn, ClientSafeProvider } from 'next-auth/react';
// import { useEffect, useState } from 'react';

// interface Providers {
//   [key: string]: ClientSafeProvider;
// }

// const SignIn: React.FC = () => {
//   const [providers, setProviders] = useState<Providers | null>(null);

//   useEffect(() => {
//     const fetchProviders = async () => {
//       const res = await getProviders();
//       setProviders(res as Providers);
//     };

//     fetchProviders();
//   }, []);

//   const handleSignIn = (providerId: string) => {
//     console.log('Inside handleSignIn with providerId:', providerId);
//     signIn(providerId, { callbackUrl: 'http://localhost:3000/api/auth/callback/azure-ad' });
//   };

//   console.log('SignIn Comp: Providers:', providers);
//   if (!providers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => handleSignIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SignIn;


import options from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import About from '@components/About';

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
    {session ? <About /> : <div>Not authenticated</div>}
    </>
  );
}