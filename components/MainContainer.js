import cl from "../pages/style.module.css";
import ALink from "./ALink";
import Head from "next/head";
import { useSelector } from "react-redux";
import { LocalizationData } from "../localization";

const MainContainer = ({ children, keywords }) => {
  const st = useSelector((state) => console.log("this is state", state));
  console.log(st);

  return (
    <>
      <Head>
        <meta keywords={"next_js " + keywords} />
        <title>Main PAGE</title>
      </Head>
      <div className={cl.navbar}>
        <ALink href={"/"} text={LocalizationData.title}>
          {LocalizationData.title}
        </ALink>
        <ALink href={"/users"} text={LocalizationData.textUsers}>
          {LocalizationData.title}
        </ALink>
        <ALink href={"/test-calendar"} text={LocalizationData.textUsers}>
          {LocalizationData.title}
        </ALink>
        <ALink href={"/pictures"} text={LocalizationData.textPictures}>
          {LocalizationData.title}
        </ALink>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
