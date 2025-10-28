"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import BackgroundWave from "@/components/ui/background-wave";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
      <BackgroundWave />
      <div className="flex flex-col items-center justify-center bg-[var(--background)] p-8">
        <div className="form-fade-in w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/images/palsen logo.png"
              alt="Logo PalSense"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-center text-3xl font-bold text-[var(--neutre-fonce)]">
            Connexion
          </h2>
          <p className="mb-6 mt-2 text-center text-sm text-[--texte-secondaire]">
            Accédez à votre tableau de bord de surveillance
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="identifier"
                className="text-sm font-medium text-[var(--neutre-fonce)]"
              >
                Identifiant
              </label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--gris-moyen)]" />
                <input
                  id="identifier"
                  type="text"
                  placeholder="ex. jdupont@pnlp.sen"
                  className="w-full rounded-md border border-[var(--gris-moyen)] p-3 pl-10 text-sm focus:outline-none focus:border-[var(--primaire)] focus:ring-1 focus:ring-[var(--primaire)]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-[var(--neutre-fonce)]"
              >
                Mot de passe
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--gris-moyen)]" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full rounded-md border border-[var(--gris-moyen)] p-3 pl-10 text-sm focus:outline-none focus:border-[var(--primaire)] focus:ring-1 focus:ring-[var(--primaire)]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--texte-secondaire)]"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[var(--gris-moyen)] text-[var(--primaire)] focus:ring-[var(--primaire)]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[var(--texte-secondaire)]"
                >
                  Se souvenir de moi
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-[var(--primaire)] hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-[var(--primaire)] py-3 text-sm font-semibold text-[var(--texte-inverse)] transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Se connecter
            </button>
          </form>
          <div className="mt-6 text-center text-xs text-[var(--texte-secondaire)]">
            <p>PalSense v2.1.3</p>
            <p>
              Besoin d'aide ?{" "}
              <a href="mailto:contact@palsense.sn" className="underline">
                contact@palsense.sn
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
