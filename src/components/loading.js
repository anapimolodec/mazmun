import { Text, useProgress } from "@react-three/drei";
import { memo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useFrame } from "@react-three/fiber";

const LoadingScreen = memo(() => {
  const { t } = useTranslation();
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const targetProgress = useRef(0);

  useEffect(() => {
    targetProgress.current = progress;
  }, [progress]);

  useFrame(() => {
    if (displayedProgress < targetProgress.current) {
      setDisplayedProgress((prev) =>
        Math.min(prev + 1, targetProgress.current)
      );
    }
  });

  useEffect(() => {
    const minimumLoadingTime = setTimeout(() => {
      if (!active && progress === 100) {
        setShow(false);
      }
    }, 500);

    if (active && !show) {
      setShow(true);
      setDisplayedProgress(0);
    }

    return () => clearTimeout(minimumLoadingTime);
    // eslint-disable-next-line
  }, [active, progress]);

  return (
    <Text fontSize={0.5} letterSpacing={-0.025} color="#2dd4bf">
      {t("loading")} {Math.round(displayedProgress)}%
    </Text>
  );
});

export default LoadingScreen;
