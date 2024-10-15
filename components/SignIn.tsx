'use client';

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div>
        <button onClick={() => signIn("azure-ad")}>Sign In</button>
    </div>
  );
}