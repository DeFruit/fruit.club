import { motion } from "framer-motion";
import { useContext } from "react";
import { WalletContext } from "~/context/walletContext";
import Navbar from "~/components/hub/NavBar";
import Container from "~/components/hub/container";
import Controls from "~/components/hub/controls";
export default function Hub() {
  const { setDisplayWalletConnectModal } = useContext(WalletContext);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background p-8 flex flex-col items-center gap-y-4">
        <Controls />
        <Container>
          <h1>Fruit Club Hub</h1>
        </Container>
      </div>
    </>
  );
}
