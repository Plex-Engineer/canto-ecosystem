import { useEffect, useRef } from "react";
import Text from "../text/text";
import styles from "./card.module.scss";

interface Props {
  name: string;
  desc: string;
  twitter: string;
  discord: string;
  site: string;
  tags: string;
  imageUri: string;
  dirty?: number;
}

const Card = ({
  name,
  desc,
  twitter,
  discord,
  site,
  tags,
  imageUri,
  dirty,
}: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (dirty) {
      animate();
    }
  }, [dirty]);

  function animate() {
    // @ts-ignore
    ref.current.animate(
      [
        { transform: "translateY(-5px)", opacity: 0, scale: 0.98 },
        { transform: "translateY(0)", opacity: 1, scale: 1 },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
  }

  return (
    <li className={styles.card} ref={ref}>
      <div className={styles["title-row"]}>
        <img
          className={styles.icon}
          src={imageUri}
          alt={name}
          width={300}
          height={300}
        />
        <div className={styles["title-tag"]}>
          <Text type="silkscreen" size={18}>
            {name}
          </Text>
          {tags.length > 0 && (
            <div className={styles.tags}>
              {/* {tags.map((tag) => (
                <div className="chip" key={tag}>
                  <Text size={14}>{tag}</Text>
                </div>
              ))} */}
              <div className={styles.chip} key={tags}>
                <Text size={14}>{tags}</Text>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.desc}>
        <Text size={14}>{desc}</Text>
      </div>
      <div>
        {site && (
          <a
            className={styles.a}
            href={site}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/link.svg" alt="Live" />
          </a>
        )}
        {discord.length > 0 && (
          <a
            className={styles.a}
            href={discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/discord.svg" alt="Discord" />
          </a>
        )}
        {twitter.length > 0 && (
          <a
            className={styles.a}
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
        )}
      </div>
    </li>
  );
};

export default Card;
