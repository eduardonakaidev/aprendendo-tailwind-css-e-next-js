import Image from "next/image";
import Link from "next/link";

import Logopng from "../public/logopng.png"




export default function Home() {
  return (
    <div className="h-screen bg-blue-950">
      <div className="flex flex-row justify-between pt-4 pb-1 bg-blue-900">
        <header className="flex flex-row space-x-4 items-center pl-16">
          <Image src={Logopng} className="h-32 w-32" />
          <h1 className="text-white text-2xl">Testando tailwind e next</h1>
        </header>
        <nav className="pr-20 flex flex-row  space-x-2" >

          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14">Home</Link>
          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14" >pagina 2</Link>
          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14" >pagina 3</Link>
          <Link href='' className="bg-blue-700 py-3 px-6 text-lg rounded text-white max-h-14" >pagina 4</Link>
        </nav>

      </div>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque est officiis hic tempore praesentium eius, odio ea esse voluptatibus ipsam atque debitis minus minima quod maxime aperiam ipsa similique!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptas accusamus vitae quod culpa architecto! Voluptatem porro molestias ipsa. Molestias exercitationem magnam ea placeat dignissimos nulla incidunt autem ex tenetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, animi! Nisi vitae, architecto obcaecati praesentium sapiente impedit. Laborum perspiciatis necessitatibus corrupti facere quis, praesentium repudiandae, in nobis voluptatibus accusantium tempora?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat incidunt non ex impedit sit! Quod dicta eius deleniti nam perferendis quidem itaque, neque numquam, laboriosam delectus laborum. Voluptates, dolor cumque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum ut facilis illo nisi repellendus veniam tempore alias cum veritatis quas magnam dolores id quisquam, a ea iure recusandae odio.
      </main>

    </div>
  )
}
