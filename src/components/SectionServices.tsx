import { ListChecks, UsersThree, DeviceMobile } from "phosphor-react";
import { Container } from "./Container";
import phoneScreen from '../assets/images/phone-screen.png';

export function SectionServices () {
    return (
        <section className="relative bg-white-200 w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w-[550px] pt-32">
                    <span className="block text-red-700 text-sm font-bold uppercase mb-9">Conteúdos exclusivos</span>
                    <h2 className="text-gray-700 text-[56px] font-bold leading-tight mb-6">Fé, tradição e magistério na palma da sua mão</h2>
                    <p className="text-gray-700 text-lg max-w-[554px] mb-16">Veja como disponibilizamos um conteúdo atual, sólido e seguro, para você aproveitar facilmente em qualquer lugar.</p>
                    
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <ListChecks size={32} className="text-red-700" />
                            <p className="flex-1 text-gray-400 font-bold pr-2">Quiz - perguntas e respostas que irão guiar você nos seus primeiros passos na fé católica</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <DeviceMobile size={32} className="text-red-700" />
                            <p className="flex-1 text-gray-400 font-bold pr-2">Orações - reze com os grandes tesouros da fé, como nossa lista de orações seletas</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <UsersThree size={32} className="text-red-700" />
                            <p className="flex-1 text-gray-400 font-bold pr-2">Vida dos santos - conheça mais sobre quem foram esses queridos amigos do céu</p>
                        </li>
                    </ul>
                </div>
            </Container>

            <div className="absolute flex items-center top-0 right-0 w-[32%] h-full">
                <img src={ phoneScreen } alt="smartphone exibindo a home page do aplicativo" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}