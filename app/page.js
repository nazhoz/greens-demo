import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/Home'); // redirects immediately before rendering anything
}
