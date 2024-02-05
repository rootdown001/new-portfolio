import About from "./about/page";
import Contact from "./contact/page";
import Main from "./main/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
