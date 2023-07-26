import { Container } from "./Container";
import { AppleStoreLogo } from "./AppleStoreLogo";
import { GooglePlayLogo } from "./GooglePlayLogo";
import bannerPrincipal from "../assets/images/banner-principal.png";

export function SectionHero() {
    
    const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, "_blank", "noreferrer");
    };
    
    return (
        <section className="w-full h-[703px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-[500px]">
                    <h1 className="text-white text-7xl font-bold mb-4">Conheça a verdadeira fé católica!</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Todo os conteúdos que você precisa em um só lugar. Simples, completo e feito para você.</p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <AppleStoreLogo/>
                        </button>
                        <button role="link" onClick={() => openInNewTab("https://play.google.com/store/apps/details?id=br.com.rianevangelista.catechesis_quiz")}>
                            <GooglePlayLogo />
                        </button>
                    </div>
                </div>
                
                <img src={ bannerPrincipal } alt="banner principal" className="mr-[-41px]"/>
            </Container>
        </section>
    )
}