import { Container } from "./Container";
import { Logo } from "./Logo";
import { GooglePlayLogo } from "phosphor-react";

export function HeaderMain () {

    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, "_blank", "noreferrer");
    };
    
    return (
        <header className="flex items-center h-24 bg-white-200">
            <Container>
                <div className="flex items-center gap-14">
                    <Logo />
                    {/*<div className="md:static absolute bg-white-200 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                            <li>
                                <ItemMenu name="Blog"/>
                            </li>
                            <li>
                                <ItemMenu name="Doe aqui"/>
                            </li>
                        </ul>
                    </div>*/}
                </div>
                
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-4 h-16 bg-red-700 text-white px-5 py-2 rounded-2xl hover:bg-yellow-500 duration-300">
                        {/*<UserCircle size={32}/>*/}
                        <GooglePlayLogo size={32} className="text-white-200"/>
                        <span role="link" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=br.com.rianevangelista.catechesis_quiz")} className="text-white-200 font-bold">Baixe o App</span>
                    </button>
            
                    
                    {/*<List size={32} onClick={toggleMenu} className="text-red-700 cursor-pointer md:hidden"/>*/}

                </div>
            </Container>
        </header>
        
    )
}