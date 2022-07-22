import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Federico <br />
          Full Stack Developer
        </SectionTitle>
        <SectionText>
          Looking for a web developer? I make web applications with latest technologies.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;