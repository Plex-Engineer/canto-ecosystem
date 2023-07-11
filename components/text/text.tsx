import { IBM_Plex_Mono, Silkscreen } from "next/font/google";

interface Props {
  type?: "silkscreen" | "ibm-plex";
  size?: 14 | 16 | 18 | 24 | 26 | 56;
  color?: "white" | "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

const ibm_plex = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ibm-plex",
});
const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

const Text = ({ type, size, color, className, children }: Props) => {
  return (
    <p
      className={` ${
        type == "silkscreen" ? silkscreen.className : ibm_plex.className
      } ${className}`}
      style={{
        fontSize: (size === undefined ? 16 : size) + "px",
        color:
          color === undefined
            ? "white"
            : color === "white"
            ? "white"
            : color === "primary"
            ? "var(--primary)"
            : "#767676",
        letterSpacing: "-0.01em",
        lineHeight: "140%",
      }}
    >
      {children}
    </p>
  );
};

export default Text;
