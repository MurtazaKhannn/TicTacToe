import { motion } from "framer-motion";

const Button = ({ resetGame }) => {
    return <motion.button whileHover={{ scale: 1.1} } onClick={() => resetGame()}>NEW GAME</motion.button>
};

export default Button;

