import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: any;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h6>{title.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })}</h6>
      <TextWrapper>
        <Content>{content.split("\n").map((i,key) => {
            return <p key={key}>{i}</p>;
        })}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
