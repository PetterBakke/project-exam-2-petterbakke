import Heading from "../heading/Heading";
import DashBoardMenu from "./DashboardMenu";

function DashboardPage({children}) {
  return (
    <>
      <Heading title="Dashboard" />
      <DashBoardMenu />
      {children ? children : <p>Select a section</p>}
    </>
  );
}
export default DashboardPage;