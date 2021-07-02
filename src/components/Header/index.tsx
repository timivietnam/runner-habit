import { Row } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
} from "./styles";

const Header = ({ t }: any) => {
  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img alt="Runner Habit" src="logo.png" height="64px" />
          </LogoContainer>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
