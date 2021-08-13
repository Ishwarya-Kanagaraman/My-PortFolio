import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,Name } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hello there, this is <Name>Ishwarya</Name><br/>
        Welcome to my PortFolio
      </SectionTitle>
      <SectionText>
             Im an enthusiastic learner, who always looking for learning new things.
              Developing react and full stack applications using MERN.
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;