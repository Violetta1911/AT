import Link from "next/link";
import { Container } from "../style/styles";
import { PrimaryText } from "../components/typography/PrimaryText";
import { SecondaryText } from "../components/typography/SecondaryText";
import { AccentText } from "../components/typography/AccentText";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Container>
                <h1 className="font-mono"> Lets start Any-time-app</h1>
                <PrimaryText />
                <SecondaryText>Secondary Text</SecondaryText>
                <AccentText>Accent text</AccentText>
                <Link href="/ingredients">
                    <AccentText>ingredients</AccentText>
                </Link>
            </Container>
        </main>
    );
};

export default Home;
