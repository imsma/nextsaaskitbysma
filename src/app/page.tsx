import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/dashboard">/Dashboard</Link>
      <Link href="/profile">/Profile</Link>
    </div>
  );
}
