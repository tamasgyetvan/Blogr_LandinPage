import { TextBox } from "./TextBox";

export const SectionThree = () => {
  return (
    <section className="sectionThree">
      <img
        className="laptopDesktop"
        src="public/images/illustration-laptop-desktop.svg"
        alt=""
      />
      <img
        className="laptopMobile"
        src="public/images/illustration-laptop-mobile.svg"
        alt=""
      />
      <div className="textContainer">
        <TextBox
          title="Free, open, simple"
          content="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        />
        <TextBox
          title="Powerful tooling"
          content="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites."
        />
      </div>
    </section>
  );
};
