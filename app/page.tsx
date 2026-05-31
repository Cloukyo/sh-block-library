import { AppShell } from "@/components/AppShell";
import { PasswordGate } from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate enabled={Boolean(process.env.APP_PASSWORD)}>
      <AppShell />
    </PasswordGate>
  );
}
