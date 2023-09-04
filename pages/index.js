import MainContainer from "../components/MainContainer";
import Authorized from "../components/Authorized";
import Login from "../components/Login";

const Index = () => {
  return (
    <MainContainer keywords={"Main Page"}>
      <Authorized />

      <Login />
    </MainContainer>
  );
};

export default Index;
