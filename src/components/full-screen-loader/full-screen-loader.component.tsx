import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const LoaderOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary || '#ffffff'};
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BarsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Bar = styled(motion.div)`
  width: 14px;
  height: 35px;
  background-color: #000000;
`;

interface Props {
  isLoading: boolean;
}

const FullScreenLoader: React.FC<Props> = ({ isLoading }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isLoading && (
        <LoaderOverlay
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BarsContainer>
            {[0, 1, 2].map((index) => (
              <Bar
                key={index}
                animate={{
                  scaleY: [1, 1.8, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            ))}
          </BarsContainer>
        </LoaderOverlay>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default FullScreenLoader;
