import React from "react";
import Card from "./Card";
import styles from "./portfolio.module.css";
import webpageImg from "../../public/images/portfolio/websiteImg.png";
import textleMappingImg from "../../public/images/portfolio/textileMappingImg.png";
import middHacksImg from "../../public/images/portfolio/middHacks.png";
import paymentApp from "../../public/images/portfolio/paymentApp.png";
import bulletpitch from "../../public/images/portfolio/bulletpitch.png";
import shhmint from "../../public/images/portfolio/shhmint.png";
//import Canvas from "./Canvas";

export default function Portfolio() {
  return (
    <div>
      <div className= {styles.cardHolder}>
        <Card
          link="https://bulletpitch.xyz"
          name="bulletpitch Website"
          description="Created a website to facilitate subscriptions and display content. "
          image={bulletpitch}
          descHead="bulletpitch Website"
          skills={["React.js", "digitalOcean", "Wordpress", "Html, Css, Js"]}
        />
        <Card
          link="https://shhmint.com"
          name="bulletpitch Website"
          description="Participated in crossmint hackathon competition. Partner and I designed a shopify plugin for NFT minting. Finished in 2nd place. "
          image={shhmint}
          descHead="Crossmint Hackathon Project: shhmint (second place)"
          skills={[
            "postgres",
            "sql",
            "shopify",
            "solaris",
            "React.js",
            "digitalOcean",
            "Wordpress",
            "Html, Css, Js",
          ]}
        />
        <Card
          link="https://ballo-testing.com"
          name="Advanced Payment App"
          description="Created a payment app for reducing transacitons after group expenditures. "
          image={paymentApp}
          descHead="Advanced Payment App"
          skills={["React.js", "AWS Amplify", "Html, Css, Js"]}
        />
        <Card
          link="https://www.alexisballo.com"
          name="This Website"
          description="While website development is not my main interest, I created this website to showcase my tech versatility and knowledge about different fields in computer science.  "
          image={webpageImg}
          descHead="Personal Resume Website"
          skills={["React.js", "DigitalOcean", "postgres", "Html, Css, Js"]}
        />
        <Card
          name="Textile Mapping"
          link="https://alexisballo.shinyapps.io/myApp"
          image={textleMappingImg}
          descHead="Textile Mapping"
          description='Website created in January semester at Middlebury College. The class was called "Data Science Across Diciplines" and the focus was on the Dutch textile trade '
          skills={["R", "shiny"]}
        />
        <Card
          link="https://github.com/AlexisBallo2/Hackathon2022"
          name="Middlebury Hackathon"
          description=" Middlebury Hackathon project where students can rent and borrow items from other students (only 24 hours on development time)  "
          image={middHacksImg}
          descHead="Middlebury Hackathon Project: Midd XChange (winning project)"
          skills={["React.js", "Html, Css, Js", "sqlite3"]}
        />
      </div>
    </div>
  );
}
