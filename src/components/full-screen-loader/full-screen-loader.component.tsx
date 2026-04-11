import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import styled from 'styled-components';
import CartBag from "../../../public/vectors/bag.svg";
import { useNavState } from '../../context/nav.state';

const LoaderOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  pointer-events: none;
`;

const StyledBag = styled(CartBag)`
  width: 180px;
  height: auto;
  display: block;
`;

const Count = styled(motion.span)`
  position: absolute;
  font-size: 2.5rem;
  font-weight: 500;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.primary || '#ffffff'};
  text-align: center;
  pointer-events: none;
  line-height: 1;
`;

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = Math.round(v).toString();
      },
    });
    return controls.stop;
  }, [value]);

  return <span ref={nodeRef}>0</span>;
};

const FullScreenLoader: React.FC = () => {
  const { state } = useNavState();
  const isLoading = state.isLoading;

  return (
    <AnimatePresence>
      {isLoading && (
        <LoaderOverlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Counter badge — fades out as transition begins */}
          <motion.div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* layoutId="cart-bag": Framer Motion will animate this to the
                header cart icon position when isLoading → false and this
                unmounts while CartIcon mounts its version. */}
            <motion.div
              layoutId="cart-bag"
              layout
              transition={{
                layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                exit={{ scale: 1, transition: { duration: 0, delay: 0 } }}
                style={{ display: "flex" }}
              >
                <StyledBag />
              </motion.div>
            </motion.div>

            <Count
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <AnimatedNumber value={100} />
            </Count>
          </motion.div>
        </LoaderOverlay>
      )}
    </AnimatePresence>
  );
};

export default FullScreenLoader;
