import { Outlet } from "react-router-dom";
import { Friends } from "pages/OurFriendsPage/OurFriendsPage";

const MainPage = () => {

    return (
        <div>
          <Outlet/>  
        </div>
    )
}

export default MainPage