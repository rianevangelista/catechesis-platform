import { Container } from "./Container";
import { AppleStoreLogo } from "./AppleStoreLogo";
import { GooglePlayLogo } from "./GooglePlayLogo";
import bannerPrincipal from "../assets/images/banner-principal.png";

export function SectionHero() {
    
    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, "_blank", "noreferrer");
    };

    const mensagem = () => {
        alert('Em breve também na App Store!')
    }
    
    return (
        <section className="w-full bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex md:flex-row flex-col mt-11 pl-16">
                    <div className="flex-1 max-w-[500px] lg:max-w-[50%]">
                        <h1 className="text-white-200 text-5xl lg:text-7xl md:text-6xl font-bold mb-4">Conheça a verdadeira fé católica!</h1>
                        <p className="text-white-200 text-xl max-w-[408px] mb-8 md:max-w-[300px]">Todo os conteúdos que você precisa em um só lugar. Simples, completo e feito para você.</p>
                        <div className="flex sm:flex-row flex-col gap-4 mb-24">
                            <button onClick={ mensagem }>
                                <AppleStoreLogo/>
                            </button>
                            <button role="link" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=br.com.rianevangelista.catechesis_quiz")}>
                                <GooglePlayLogo />
                            </button>
                        </div>
                    </div>
                    
                    <img src={ bannerPrincipal } alt="banner principal" className="md:max-w-[50%]"/>
                </div>
            </Container>
        </section>
    )
}