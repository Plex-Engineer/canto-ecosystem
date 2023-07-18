import { use, useEffect, useMemo, useState } from "react";
import styles from "./recommendation.module.scss";
import Text from "@/components/text/text";
import Image from "next/image";
import { Column, Row } from "@/components/layout/layout";

const Recommendation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const recommendations = [
    {
      name: "Alto Market",
      desc: "Free Public NFT Marketplace on @CantoPublic. 0% trading fees and creators set their own royalties.",
      twitter: "https://twitter.com/AltoMarket",
      discord: "",
      site: "https://alto.build/",
      tags: "NFT",
      imageUri:
        "https://pbs.twimg.com/profile_images/1592349014283927552/VRUdvavU_400x400.jpg",
    },
    {
      name: "Beefy",
      desc: "Multichain Yield Optimizer. Autocompound your tokens and positions.",
      twitter: "https://twitter.com/beefyfinance",
      discord: "",
      site: "https://app.beefy.finance/",
      tags: "DeFi",
      imageUri:
        "https://pbs.twimg.com/profile_images/1679102988122505216/ikFQUonK_400x400.jpg",
    },
    {
      name: "Cantoscan",
      desc: "Block explorer and search tool on Canto.",
      twitter: "https://twitter.com/cantoscan_",
      discord: "",
      site: "https://cantoscan.com/",
      tags: "Other",
      imageUri:
        "https://pbs.twimg.com/profile_images/1623492252528963585/wwSzqHRh_400x400.jpg",
    },
    {
      name: "Llamaswap",
      desc: "LlamaSwap looks for the best route for your trade among a variety of Dex Aggregators, guaranteeing you the best execution prices in DeFi.",
      twitter: "https://twitter.com/defillama",
      discord: "",
      site: "https://swap.defillama.com/?chain=canto&from=0x0000000000000000000000000000000000000000",
      tags: "DeFi",
      imageUri:
        "https://pbs.twimg.com/profile_images/1377743719089254405/LQwS_x0l_400x400.jpg",
    },
    {
      name: "Redstone",
      desc: "Modular Oracles delivering cost-efficient data for DeFi to EVM L1s&L2s.",
      twitter: "https://twitter.com/redstone_defi",
      discord: "",
      site: "https://redstone.finance/",
      tags: "Infrastructure",
      imageUri:
        "https://pbs.twimg.com/profile_images/1405602838915522562/jf6E8c-K_400x400.png",
    },
    {
      name: "Cadence",
      desc: "A Symphony of Next Generation Decentralized Perpetuals. Built on Canto by ex-ConsenSys, Kraken & Amazon devs.",
      twitter: "https://twitter.com/CadenceProtocol",
      discord: "",
      site: "",
      tags: "DeFi",
      imageUri:
        "https://pbs.twimg.com/profile_images/1664476389888651264/ykwVY2CY_400x400.jpg",
    },
    {
      name: "Synapse",
      desc: "Synapse is a cross-chain bridge.",
      twitter: "https://twitter.com/SynapseProtocol",
      discord: "",
      site: "https://synapseprotocol.com/?inputCurrency=USDC&outputCurrency=USDC&outputChain=42161",
      tags: "Bridges",
      imageUri:
        "https://pbs.twimg.com/profile_images/1569424435555229701/9f9Uq_Rb_400x400.png",
    },
    {
      name: "Gravity Bridge",
      desc: "Gravity Bridge is a decentralized Cosmos blockchain whose primary purpose is to secure the operation of bridges between blockchains.",
      twitter: "https://twitter.com/gravity_bridge",
      discord: "",
      site: "https://canto.io/bridge",
      tags: "Bridges",
      imageUri:
        "https://pbs.twimg.com/profile_images/1468693678134677504/SoecObPL_400x400.jpg",
    },
    {
      name: "Gumball",
      desc: "GumBall Protocol is a Liquid NFT creation and trading hub. When an NFT collection is launched on GumBall Protocol, a corresponding amount of ERC20 tokens (GBTs) are also created for that collection.",
      twitter: "https://twitter.com/GumBallProtocol",
      discord: "",
      site: "https://www.gumball.fi/",
      tags: "NFT",
      imageUri:
        "https://pbs.twimg.com/profile_images/1631104142306603008/IJ3LZiUd_400x400.jpg",
    },
    {
      name: "Ansybl",
      desc: "Access to fast, reliable, and secure API endpoints for the Canto ecosystem.",
      twitter: "https://twitter.com/ansybl_io",
      discord: "",
      site: "https://ansybl.io/",
      tags: "Infrastructure",
      imageUri:
        "https://pbs.twimg.com/profile_images/1635755257442496512/VQEzm6Wp_400x400.jpg",
    },
    {
      name: "Canto Herald",
      desc: "The fastest news publication on the $CANTO blockchain.",
      twitter: "https://twitter.com/cantoherald",
      discord: "",
      site: "https://cantoherald.news/",
      tags: "Analytics",
      imageUri:
        "https://pbs.twimg.com/profile_images/1648015649543954432/iOflkpaF_400x400.jpg",
    },
    {
      name: "Canto Analytics",
      desc: "View analytics on Canto’s FPI.",
      twitter: "https://twitter.com/NeoBase_Studios",
      discord: "",
      site: "https://analytics.neobase.one/home/",
      tags: "Analytics",
      imageUri:
        "https://pbs.twimg.com/profile_images/1575033661057290241/DMEembZM_400x400.jpg",
    },
    {
      name: "Transpose",
      desc: "Explore and integrate real-time blockchain data into any application at scale.",
      twitter: "https://twitter.com/TransposeData",
      discord: "",
      site: "https://app.transpose.io/",
      tags: "Analytics",
      imageUri:
        "https://pbs.twimg.com/profile_images/1517206399901597696/D1WkrbQF_400x400.jpg",
    },
    {
      name: "UniDex Exchange",
      desc: "The meta-aggregator of everything in DeFi: charting data, perpetuals, swaps, limit-orders, trade data, and more everyday right from your wallet.",
      twitter: "https://twitter.com/UniDexFinance",
      discord: "",
      site: "https://www.unidex.exchange/",
      tags: "DeFi",
      imageUri:
        "https://pbs.twimg.com/profile_images/1432662458599104516/EJcaYC2s_400x400.jpg",
    },

    {
      name: "CPMS",
      desc: "Canto Public Messaging Service. Send a message on Canto. Your message, forever on the blockchain.",
      twitter: "https://twitter.com/CantoMessenger",
      discord: "",
      site: "https://cpms.wtf/",
      tags: "Other",
      imageUri:
        "https://pbs.twimg.com/profile_images/1586552931700162561/hk33SZs__400x400.jpg",
    },
    {
      name: "Canto Safe",
      desc: "A multisig smart contract for Canto. Canto Safe enables users to create a safe, update stakeholders, and more.",
      twitter: "https://twitter.com/NeoBase_Studios",
      discord: "",
      site: "https://safe.neobase.one/welcome",
      tags: "Other",
      imageUri:
        "https://pbs.twimg.com/profile_images/1575033661057290241/DMEembZM_400x400.jpg",
    },
    {
      name: "Canto Splits",
      desc: "On-chain payment management.",
      twitter: "https://twitter.com/NeoBase_Studios",
      discord: "",
      site: "https://splits.neobase.one/",
      tags: "Other",
      imageUri:
        "https://pbs.twimg.com/profile_images/1575033661057290241/DMEembZM_400x400.jpg",
    },
  ];
  const [recommendation, setRecommendation] =
    useState<(typeof recommendations)[0]>();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setRecommendation(
        recommendations[Math.floor(Math.random() * recommendations.length)]
      );
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
            <Row align="center" gap={30} justify="space-between">
              <img
                className={styles.image}
                src={recommendation?.imageUri!}
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
              {recommendation?.desc}
            </Text>
            <button
              type="button"
              onClick={() => {
                window.open(recommendation?.site, "_blank");
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
