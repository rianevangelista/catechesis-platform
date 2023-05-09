import screenMockup from "../assets/images/screen-mockup.png";
import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/evento')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
           <h1 className="mt-8 text-[2.5rem]">
            Conheça a verdadeira <strong  className="text-yellow-500">fé católica</strong>!
           </h1>
           <p className="mt-4 text-gray-200 text-xl leading-relaxed">
            Somos a plataforma que irá auxiliar você nos seus primeiros passos na fé católica. Nosso propósito é possibilitar para você o acesso a um conhecimento mais sólido a respeito da Fé, Tradição e Magistério da Igreja. Então não perca tempo e junte-se a gente nessa <strong>Jornada</strong>!
           </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={ handleSubscribe } className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="text" 
              placeholder="Seu nome completo"
              onChange={ event => setName(event.target.value) }
            />
            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="email" 
              placeholder="Digite o seu e-mail"
              onChange={ event => setEmail(event.target.value) }
            />

            <button 
              type="submit"
              disabled = { loading }
              className="mt-4 bg-red-700 uppercase py-4 rounded font-bold text-sm hover:bg-red-800 transition-colors disabled:opacity-50" 
            >
              Garantir minha vaga
            </button>
          </form>
        </div>

               
      </div>

      <img src={ screenMockup } className="mt-10" alt="" />

    </div>
  );
}