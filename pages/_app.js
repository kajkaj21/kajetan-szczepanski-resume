import { motion } from "framer-motion";
import "../styles/globals.css";
import { Navigation } from "../Components/Navigation";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <Component {...pageProps} />
      <Navigation />
    </motion.div>
  );
}

export default MyApp;
