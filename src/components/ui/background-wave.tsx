import Image from "next/image";
import { FaHeartPulse } from "react-icons/fa6";

const BackgroundWave = () => {
  return (
    <div className="wave-bg hidden h-screen w-full flex-col items-center justify-center gap-6 p-10 text-white lg:flex">
      <div className="rounded-full bg-white p-4">
        <FaHeartPulse className="text-5xl text-[var(--primaire)]" />
      </div>
      <h1 className="text-4xl font-bold">PalSense</h1>
      <div className="text-center">
        <p className="text-lg">Tableau de bord de santé publique</p>
        <p className="text-sm">
          Programme National de Lutte contre le Paludisme
        </p>
      </div>
      <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
        <Image
          src="/images/login image.png"
          alt="Illustration de personnel de santé"
          width={400}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
      <p className="mt-4 text-center text-sm">
        Surveillance épidémiologique et cartographie des cas de paludisme au
        Sénégal.
      </p>
    </div>
  );
};

export default BackgroundWave;
