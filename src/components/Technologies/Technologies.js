import React from 'react';
import { DiAngularSimple, DiAws, DiDocker, DiDotnet, DiFirebase, DiJenkins, DiMongodb, DiMsqlServer, DiMysql, DiNodejs, DiPhp, DiPostgresql, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Angular <br />
            Vue.js <br />
            React.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDotnet size="3rem" />
          <DiPhp size="3rem" />
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Web API's (REST and GraphQL) and Web apps <br />
            C# .NET (ASP .NET MVC, .NET Core, Blazor and MAUI) <br />
            PHP (Yii Framework) <br />
            Node 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMsqlServer size="3rem" />
          <DiMysql size="3rem" />
          <DiPostgresql size="3rem" />
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with Databases (SQL and NoSQL) <br />
            SQL Server <br />
            MySQL <br />
            PostgreSQL <br />
            MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
          <DiDocker size="3rem" />
          <DiJenkins size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS Services <br />
            Azure <br />
            Docker <br />
            Jenkins <br />
            Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
