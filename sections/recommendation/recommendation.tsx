import { use, useEffect, useState } from "react";
import styles from "./recommendation.module.scss";
import Text from "@/components/text/text";
import Image from "next/image";
import { Column, Row } from "@/components/layout/layout";

const Recommendation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    name: string;
    description: string;
    link: string;
    image: string;
  }>();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setRecommendation({
        name: "Canto",
        description:
          "Canto is a decentralized social network that allows users to create and share content with anyone in the world.",
        link: "https://canto.io",
        image: "https://cantoscan.com/canto.jpg",
      });
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loading}>
          <Text type="silkscreen" color="white" size={14}>
            Loading...
          </Text>
        </div>
      ) : (
        <div className={styles.recommendation}>
          <Column gap={30}>
            <Row align="center" justify="space-between">
              <img
                className={styles.image}
                src={recommendation?.image!}
                alt={recommendation?.name!}
                height={160}
                style={{
                  objectFit: "cover",
                }}
              />
              <Text type="silkscreen" color="white" size={26}>
                {recommendation?.name}
              </Text>
            </Row>
            <Text type="ibm-plex" color="white" size={14}>
              {recommendation?.description}
            </Text>
            <button
              type="button"
              onClick={() => {
                window.open(recommendation?.link, "_blank");
              }}
            >
              try it out now
            </button>
          </Column>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
