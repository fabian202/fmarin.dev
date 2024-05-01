import ConsoleContainer from "./components/ConsoleContainer";
import Link from 'next/link'

export default function Home() {
  return (
    <main>

      <ConsoleContainer  />
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
