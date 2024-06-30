import Image from "next/image";


export default function Home() {
  const emailAddress = "myvidaspace@gmail.com";
  const mailtoLink = `mailto:${emailAddress}`;
  return (
    <div className="flex items-center gap-1 justify-center w-screen mt-4 grid place-items-center	h-56">
      <Image src="/logo/vida.jpeg" alt="Vida" width={200} height={200} />
      <h1 className="text-4xl">Vida</h1>
      <p>Coming soon you can contact us and give feedback and share your ideas </p>
      <a href={mailtoLink}>myvidaspace@gmail.com</a>
    </div>
  );
}