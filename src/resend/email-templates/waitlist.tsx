import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { type UserType } from "@prisma/client";

interface WaitlistEmailProps {
  name: string;
  userType: UserType;
}

const baseURL = "https://grovrtesting.com";
const whatsappCommunityURL = "https://chat.whatsapp.com/FX1CDx677MpFK43yssBc32";

export const WaitlistEmail = ({ name, userType }: WaitlistEmailProps) => {
  let emailContentJSX = (
    <>
      <Text style={paragraph}>
        We wanted to take a moment to extend a warm welcome and thank you for
        joining the GroVr waitlist! 🌟 Your interest in GroVr and our user
        testing community is greatly appreciated.
      </Text>
      <Text style={paragraph}>
        Now that you're on our waitlist, you'll be among the first to receive
        updates, announcements, and exciting news about GroVr. We have some
        amazing things in store, and we can't wait to share them with you.
      </Text>
      <Text style={paragraph}>
        To ensure you don't miss out on any updates and to be a part of our
        vibrant community discussions, we invite you to join our WhatsApp group.
        Click on the link below to become a part of our{" "}
        <Link href={whatsappCommunityURL} style={link}>
          waitlist community on WhatsApp.
        </Link>
      </Text>
      <Text style={paragraph}>
        Thank you once again for showing your interest in GroVr. We look forward
        to keeping you informed and engaged as we move forward on this journey
        together.
      </Text>
    </>
  );

  if (userType === "COMPANY") {
    emailContentJSX = (
      <>
        <Text style={paragraph}>
          Welcome to the GroVr waitlist! 🚀 We're excited to have you express
          your interest in our User Testing Management Tool.
        </Text>
        <Text style={paragraph}>
          Our tool is designed to simplify and enhance the user testing process
          for companies like yours. With GroVr, you'll have access to a platform
          that streamlines test management, gathers valuable insights, and helps
          you make informed decisions.
        </Text>
        <Text style={paragraph}>
          Keep an eye on your inbox because we'll be sending you updates and
          information about getting started with GroVr. We're eager to
          collaborate with you and help you achieve your user testing goals.
        </Text>
        <Text style={paragraph}>
          Thank you for choosing GroVr for your user testing needs. We can't
          wait to work together!
        </Text>
      </>
    );
  }

  return (
    <Html>
      <Head />
      <Preview>You’re on the waitlist for GroVr Testing</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`${baseURL}/logo-with-text.png`} />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi {name},</Text>
            {emailContentJSX}
            <Text style={paragraph}>
              Still have questions? Please contact{" "}
              <Link href={baseURL} style={link}>
                GroVr Live Chat Support
              </Link>
            </Text>
            <Text style={paragraph}>
              Thanks,
              <br />
              Team GroVr
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              <Link
                href="https://www.linkedin.com/company/grovrtesting"
                target="_blank"
              >
                <Img src={`${baseURL}/email-assets/linkedin.png`} width={20} />
              </Link>
            </Column>
            <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              <Link
                href="https://www.instagram.com/grovrtesting/"
                target="_blank"
              >
                <Img src={`${baseURL}/email-assets/instagram.png`} width={20} />
              </Link>
            </Column>
          </Row>
          <Text style={{ textAlign: "center", color: "#706a7b" }}>
            © 2023 GroVr Technology Pvt. Ltd, All Rights Reserved
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

export default WaitlistEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
