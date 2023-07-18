import HighlightCard from "@/components/highlight_card/highlightCard";
import styles from "./spotlight.module.scss";

const Spotlight = () => {
  const data = [
    {
      title: "Cluster Spotlight : Canto Protocol Improvement Cluster (CPIC)",
      description:
        "The CPIC is a newly formed cluster contributing to core blockchain modules on Canto",
      created_at: "20-06-2023",
      site: "https://canto.io",
      imageUrl:
        "https://images.unsplash.com/photo-1689579230089-5f3715ebe0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    },

    {
      title: "Project Spotlight : Alto.build",
      description:
        "Free public NFT marketplace for collectibles and intellectual property on Canto. Buy, sell, and discover exclusive digital items. Packaging collectibles ",
      created_at: "18-06-2023",
      site: "https://alto.build",
      imageUrl:
        "https://pbs.twimg.com/profile_banners/1569369125121626112/1675765332/1500x500",
    },
  ];
  return (
    <div className={styles.container}>
      <HighlightCard {...data[0]} />
      <HighlightCard {...data[1]} />
    </div>
  );
};

export default Spotlight;
