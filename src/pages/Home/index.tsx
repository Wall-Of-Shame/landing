import { lazy } from "react";
// import DownloadContent from "../../content/DownloadContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import StressfulContent from "../../content/StressfulContent.json";
import InefficientContent from "../../content/InefficientContent.json";
import RandomContent from "../../content/RandomContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const IntroBlock = lazy(() => import("../../components/IntroBlock"));
const Container = lazy(() => import("../../common/Container"));
const ColoredContainer = lazy(() => import("../../common/ColoredContainer"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <ColoredContainer>
        <IntroBlock />
      </ColoredContainer>
      
        {/* <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="puzzle.png"
          id="intro"
        /> */}
        {/* <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          section={MiddleBlockContent.section}
          id="about"
        /> */}
      <Container>
        <ContentBlock
          type="left"
          title={InefficientContent.title}
          content={InefficientContent.text}
          icon="invite.png"
          id="about"
        />
        <ContentBlock
          type="right"
          title={StressfulContent.title}
          content={StressfulContent.text}
          icon="running.gif"
          id="stress"
        />
        <ContentBlock
          type="left"
          title={RandomContent.title}
          content={RandomContent.text}
          icon="store.png"
          id="random"
        />
        {/* <ContentBlock
          type="right"
          title={DownloadContent.title}
          content={DownloadContent.text}
          button={DownloadContent.button}
          icon="chat.jpg"
          id="download"
        /> */}
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
    </>
  );
};

export default Home;
