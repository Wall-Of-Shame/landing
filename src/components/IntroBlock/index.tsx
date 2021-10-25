import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { scrollToSection } from "../../common/utils/getWindow";
import { Button } from "../../common/Button";
import {
  IntroSection,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const IntroBlock = () => {
  const handleOnClick = () => scrollToSection('about');
  const handleRedirect = () => {
    window.open("https://wallofshame.io/");
  }
  return (

      <IntroSection>
        <Row justify="space-between" align="middle" id="intro">
          <Col lg={9} md={9} sm={9} xs={24}>
            <ContentWrapper>
              <h6>Banish your friends to the Wall of Shame</h6>
              <Content>Take the moral highground.</Content>
            </ContentWrapper>
            <ButtonWrapper>
              <Button
                key='explore'
                fixedWidth={true}
                onClick={handleOnClick}
              >
                Explore
              </Button>
              <Button
                key='try'
                fixedWidth={true}
                color='#faa284'
                focusColor='#ffbf2f'
                onClick={handleRedirect}
              >
                Try it now!
              </Button>
            </ButtonWrapper>
          </Col>
          <Col lg={15} md={15} sm={15} xs={24}>
            <SvgIcon src="intro.png" width="85%" height="85%" />
          </Col>
        </Row>
      </IntroSection>

  );
};

export default withTranslation()(IntroBlock);
