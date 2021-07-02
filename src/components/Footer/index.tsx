import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

// import i18n from "i18next";
import {
  FooterSection,
  Title,
  Para,
  Large,
  Chat,
  Language,
} from "./styles";

const Footer = ({ t }: any) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:timistudio20181129@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/policy" left="true">
                {t("Privacy Policy")}
              </Large>
              <Large left="true" to="/terms">
                {t("Terms & Conditions")}
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
