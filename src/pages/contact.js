import React from "react"
import styled from "styled-components"
import SEO from '../components/Seo/Seo'


const ContactHeader = styled.h1`
  text-align: center;
  margin: 50px 10px 0;
  color: #005EEF;

  @media(max-width:992px){
    text-align: left;
    font-size: 2.2rem;
    margin: 50px 5% 0 10%;
    }

  @media(max-width:325px){
    font-size: 2rem;
    }
`;

const ContactSection = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const ContactInformation = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width:992px){
      grid-template-columns: 1fr;
    }

  p{
    text-align: left;
  }
`;

const ContactInformationOne = styled.div`
  justify-self: end;
  padding: 10px 50px;

  @media(max-width:992px){
    justify-self: start;
    margin-left: 10%;
    padding: 0;
    }
`;

const ContactInformationTwo = styled.div`
  justify-self: start;
  border-left: 1px solid rgba(0, 0, 0, .3);
  padding: 10px 50px;

  @media(max-width:992px){
    justify-self: start;
    margin-left: 10%;
    border-left: none;
    padding: 0;
    }
`;

const ContactMap = styled.div`
  margin: 0 auto 50px;
  max-width: 1000px;

  iframe {
    width: 100% !important;
  }
`;

const ContactPage = () => (
  <>
  <SEO title="Kontakt" description="Unilever Eesti AS. Kuidas meiega ühendust saada? Paldiski mnt 96, Tallinn, Eesti, 13552. Telefon: +372 612 0410. E-mail: info-estonia@unilever.com"/>
    <ContactSection>
      <ContactHeader>Unilever Eesti AS</ContactHeader>
      <ContactInformation>
        <ContactInformationOne>
          <p>Rocca Ärimaja</p>
          <p>Paldiski mnt 96, Tallinn, 13552</p>
        </ContactInformationOne>
        <ContactInformationTwo>
          <p><a href="mailto:info-estonia@unilever.com">info-estonia@unilever.com</a></p>
          <p><a href="tel:+372 612 0410">+372 612 0410</a></p>
        </ContactInformationTwo>
      </ContactInformation>
      <ContactMap>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.3201786410716!2d24.662613616157632!3d59.42773441017055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469295e906bf35e9%3A0x959cedf73d931eb1!2sRocca%20%C3%84rimaja!5e0!3m2!1sen!2spl!4v1603878829954!5m2!1sen!2spl" width="900" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </ContactMap>
    </ContactSection>
  </>
)

export default ContactPage
