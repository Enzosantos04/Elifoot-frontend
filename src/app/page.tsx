"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="Elifoot"
            width={280}
            height={92}
            priority
          />
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-sm text-gray-400">Acesse a sua conta</p>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu Nome"
              className="w-full rounded-xl bg-[#1a1a1a] px-4 py-4 pl-12 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* Campo Senha */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Sua Senha"
              className="w-full rounded-xl bg-[#1a1a1a] px-4 py-4 pl-12 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="text-white hover:text-gray-300 transition cursor-pointer"
            >
              Recuperar minha senha
            </button>
            <Link
              href="/signup"
              className="text-orange-500 hover:text-orange-400 transition font-medium"
            >
              Crie sua conta agora
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 py-4 text-base font-bold text-black transition hover:from-orange-400 hover:to-yellow-400 cursor-pointer"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}
