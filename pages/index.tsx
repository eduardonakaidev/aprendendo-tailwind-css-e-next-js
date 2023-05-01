import Image from "next/image";
import Link from "next/link";

import Logopng from "../public/logopng.png"




export default function Home() {
  return (
    <div className="h-screen bg-blue-950">
      <div className="flex flex-row justify-between pt-4 pb-1 bg-blue-900">
        <header className="flex flex-row space-x-4 items-center pl-16">

          <Link href="/">
            <Image src={Logopng} className="h-32 w-32" />
          </Link>
          <h1 className="text-white text-2xl">Testando tailwind e next</h1>
        </header>

        <nav className="pr-20 flex flex-row  space-x-2" >

          <Link href='/' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14">Home</Link>
          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14" >pagina 2</Link>
          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14" >pagina 3</Link>
          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14" >pagina 4</Link>
        </nav>

      </div>
      
      <main>

      </main>

    </div>
  )
}
