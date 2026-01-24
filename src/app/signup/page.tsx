"use client";
import Image from "next/image";
import Link from "next/link";
import { InputField } from "../components/signup/InputField";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };
  return (
    <main className="grid min-h-screen bg-white text-slate-900 grid-cols-2 lg:grid-cols-[35%_65%]">
      <div className="flex flex-col justify-center gap-10 bg-black px-12 py-12 text-white lg:px-56">
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Elifoot"
              width={170}
              height={54}
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold leading-snug">
              Bem-vindo <br />
              de volta!
            </h1>
            <p className="max-w-xs text-lg text-gray-200">
              Acesse sua conta agora mesmo.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="flex w-64 items-center justify-center rounded-2xl border-2 border-white px-6 py-4 text-2xl font-extrabold uppercase tracking-tight text-white transition hover:bg-white hover:text-black "
          >
            Entrar
          </Link>
          <Link
            href="/forgot-password"
            type="button"
            className="text-sm text-gray-300 hover:text-white ml-12 mt-12 cursor-pointer"
          >
            Esqueci minha senha.
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-2xl space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-extrabold">Crie sua conta</h2>
            <p className="text-base text-gray-500">Preencha seus dados</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              id="name"
              name="name"
              type="text"
              placeholder="Seu Nome"
              iconPath="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Seu Email"
              iconPath="M4 8l8 5 8-5m-14 7h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Sua Senha"
              iconPath="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-2xl bg-black px-6 py-4 text-xl font-extrabold uppercase tracking-tight text-white transition hover:bg-neutral-900 cursor-pointer"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
