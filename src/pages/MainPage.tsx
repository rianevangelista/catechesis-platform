import { HeaderMain } from "../components/HeaderMain";
import { SectionHero } from "../components/SectionHero";
import { SectionServices } from "../components/SectionServices";

export function MainPage() {
    return (
        <div>
            <HeaderMain />
            <SectionHero />
            <SectionServices />
        </div>
    )
}