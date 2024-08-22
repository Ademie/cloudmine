import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, BoxProps } from "@chakra-ui/react";

interface FadeInOnScrollProps extends BoxProps {
  direction?: "left" | "right" | "center";
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  direction = "left",
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      scale: direction === "center" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <Box {...rest}>{children}</Box>
    </motion.div>
  );
};

export default FadeInOnScroll;
