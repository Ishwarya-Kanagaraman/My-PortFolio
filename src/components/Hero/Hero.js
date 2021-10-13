import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Name } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there, this is <Name>Ishwarya</Name>
        <br />
        Welcome to my PortFolio
      </SectionTitle>
      <SectionText>
        Im an enthusiastic learner, who always looking for learning new things.
        Developing react and full stack applications using MERN.
      </SectionText>

      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1WwXDpKm9yeK531Mvh8GRU5eBlWc1yQlF/view?usp=sharing",
            "_blank"
          )
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
