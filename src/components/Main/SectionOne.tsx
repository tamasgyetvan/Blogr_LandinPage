import { TextBox } from "./TextBox";

export const SectionOne = () => {
  return (
    <section className="sectionOne">
      <div className="textContainer">
        <TextBox
          title="Introducing an extensible editor"
          content="Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog."
        />
        <TextBox
          title="Robust content management"
          content="Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control."
        />
      </div>
      <img
        className="svgDesktop"
        src="images/illustration-editor-desktop.svg"
        alt=""
      />
      <img
        className="svgMobile"
        src="images/illustration-editor-mobile.svg"
        alt=""
      />
    </section>
  );
};
