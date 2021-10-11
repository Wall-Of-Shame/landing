import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { MinPara, MinTitle, ServiceWrapper } from "../ContentBlock/LeftContentBlock/styles";
import { SvgIcon } from "../../common/SvgIcon";
import { scrollToSection } from "../../common/utils/getWindow";

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  t: any;
  section?: any;
  id?: string;
}

const MiddleBlock = ({ title, content, button, id, section, t }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollToSection("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
          <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
