import { FooterList } from "./FooterList";

export const Footer = () => {
  return (
    <footer>
      <h1>Blogr</h1>
      <FooterList
        title={"Product"}
        listItems={[
          "Overview",
          "Pricing",
          "Marketplace",
          "Features",
          "Integrations",
        ]}
      />
      <FooterList
        title={"Company"}
        listItems={["About", "Team", "Blog", "Careers"]}
      />
      <FooterList
        title={"Connect"}
        listItems={["Contact", "Newsletter", "LinkedIn"]}
      />
    </footer>
  );
};
