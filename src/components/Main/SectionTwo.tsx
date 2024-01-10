import { TextBox } from "./TextBox";

export const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <div className="mask">
        <img className="circle" src="images/bg-pattern-circles.svg" alt="" />
      </div>
      <img className="phone" src="images/illustration-phones.svg" alt="" />
      <TextBox
        title="State of the Art Infrastructure"
        content="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
  This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
        fontType="bright"
      />
    </section>
  );
};
