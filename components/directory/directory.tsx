import Selector from "../selector/selector";
import styles from "./directory.module.scss";

interface Props {}
const Directory = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className="sidebar">
        <Selector
          items={[
            "All",
            "Nfts",
            "Defi",
            "Node Providers",
            "Oracles",
            "Bridges",
            "Blockchains",
            "Block Explorers",
            "CEXs",
            "Games",
            "Data",
            "Wallets",
            "Ecosystem",
          ]}
        />
      </div>
      <div className="main"></div>
    </div>
  );
};

export default Directory;
