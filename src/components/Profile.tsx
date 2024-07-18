import Link from "next/link";
import { Button } from "./ui/button";

export default function Profile() {
  return (
    <div>
      <Link href="/auth">
        <Button variant="outline">Signin</Button>
      </Link>
    </div>
  );
}
