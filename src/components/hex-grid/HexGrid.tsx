import { MotionImg } from "../MotionElements";


const nodeLogo = "/logos/nodejs.svg";
const codeLogo = "/logos/code.svg";
const reactLogo = "/logos/react.svg";
const dockerLogo = "/logos/docker.svg";
const javaLogo = "/logos/java.svg";
const springLogo = "/logos/spring.svg";

const logos = [
  nodeLogo,
  codeLogo,
  reactLogo,
  dockerLogo,
  javaLogo,
  springLogo
];

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const HexGrid = ({ inView }: any) => {
  return (
    <div className="gallery">
      {logos.map((logo, index) => (
        <MotionImg
          variants={variants}
          initial="hidden"
          whileHover={{
            scale: 1.3
          }}
          animate={inView ? "show" : "hidden"}
          transition={{ delay: index * 0.05, ease: "easeInOut", duration: 0.5 }}
          src={logo}
          alt="logo"
          width={100}
          height={100}
          key={index}
        />
      ))}
    </div>
  );
};

export default HexGrid;