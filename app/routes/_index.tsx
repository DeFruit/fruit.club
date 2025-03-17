import Hero from "~/components/Hero";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import TeamFun from "~/components/TeamFun";
import GameLoop from "~/components/Gameloop";
import JuiceToken from "~/components/JuiceToken";
import { WalletConnectionModal } from "~/components/modals/walletConnectModal";
import { Providers } from "~/service/providers";
import { WalletContextProvider } from "~/context/walletContext";
import GetNotified from "~/components/GetNotified";
import { useRef } from "react";
export default function Index() {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <WalletContextProvider>
        <WalletConnectionModal />
        <Navbar />
        <Hero scrollToBottom={scrollToBottom} />
        <TeamFun />
        <GameLoop />
        <Features />
        <JuiceToken />
        <GetNotified />
        <Footer />
      </WalletContextProvider>
      <div ref={bottomRef} className="h-1"></div>
    </div>
  );
}
