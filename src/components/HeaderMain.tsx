import { Container } from "./Container";
import { ItemMenu } from "./ItemMenu";
import { Logo } from "./Logo";
import { UserCircle } from "phosphor-react";

export function HeaderMain () {
    return (
        <header className="relative flex items-center w-full h-24 bg-white-200">
            <div className="absolute top-0 right-0 bg-red-700 w-[25%] h-full z-0"></div>
            <Container>
                <div>
                    <div className="flex items-center gap-14">
                        <Logo />
                        <ul className="flex items-center gap-12">
                            <li>
                                <ItemMenu name="Blog"/>
                            </li>
                            <li>
                                <ItemMenu name="Doe aqui"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="flex items-center gap-4 bg-red-700 h-24 pl-10 z-10">
                    <UserCircle size={32}/>
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </Container>
        </header>
    )
}