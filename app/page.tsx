import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <Image
        src="/reassembly-logo.svg"
        alt="Reassembly"
        width={800}
        height={800}
        priority
        className="w-full max-w-[200px] h-auto"
      />
    </main>
  )
}
