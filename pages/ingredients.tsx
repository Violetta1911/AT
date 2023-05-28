import { AccentText } from "../components/typography/AccentText";
import { PrimaryText } from "../components/typography/PrimaryText";
import { SecondaryText } from "../components/typography/SecondaryText";
import { Container } from "../style/styles";

const Ingredients = () => {
    return (
        <Container>
            <h1 className="font-mono">Ingredients</h1>
            <SecondaryText>SecondaryText</SecondaryText>
            <AccentText>Accent text</AccentText>
        </Container>
    );
};

export default Ingredients;
