import Hero from "~/components/Hero";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import TeamFun from "~/components/TeamFun";
import GameLoop from "~/components/Gameloop";
import JuiceToken from "~/components/JuiceToken";
export default function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TeamFun />
      <GameLoop />
      <Features />
      <JuiceToken />

      <Footer />
    </div>
  );
}
