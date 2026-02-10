import Link from "next/link";

export default function Nav() {
  return (
  <nav className="flex justify-start gap-4  p-4 border-b-2 border-[#544d4d] items-center text-[#544d4d] bg-[#f7f2e0]" >
    <Link href="/">
      <img width="40" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" />
    </Link>
    <Link href="https://computing.psu.ac.th/th/" className="font-bold text-[1.5em]">CoC</Link>
      <ul className="flex ml-auto gap-4 tex font-bold ">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </ul>
  </nav>
  )
}