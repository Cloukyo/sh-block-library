"use client";

import { FormEvent, useEffect, useState } from "react";

type PasswordGateProps = {
  enabled: boolean;
  children: React.ReactNode;
};

const ACCESS_KEY = "sh-block-library:access-granted";

export function PasswordGate({ enabled, children }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(enabled);
  const [hasAccess, setHasAccess] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setHasAccess(true);
      setIsChecking(false);
      return;
    }

    setHasAccess(window.sessionStorage.getItem(ACCESS_KEY) === "true");
    setIsChecking(false);
  }, [enabled]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    if (response.ok) {
      window.sessionStorage.setItem(ACCESS_KEY, "true");
      setHasAccess(true);
      return;
    }

    setError("That password was not recognised.");
  }

  if (isChecking) {
    return null;
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f3ee] p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-6 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">Private internal tool</p>
        <h1 className="mt-2 text-2xl font-semibold text-ink">SH Block Library</h1>
        <p className="mt-2 text-sm leading-6 text-[#69645e]">Enter the app password to continue.</p>
        <label className="mt-5 grid gap-2 text-sm font-semibold text-[#5f5952]">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoFocus
            className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
          />
        </label>
        {error ? <p className="mt-3 text-sm font-semibold text-[#8a3f2c]">{error}</p> : null}
        <button type="submit" className="mt-5 min-h-11 w-full rounded-md border border-ink bg-ink px-4 text-sm font-semibold text-white hover:bg-[#35312c]">
          Unlock Library
        </button>
      </form>
    </main>
  );
}
