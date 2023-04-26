import ExploreIcon from "../../assets/ExploreIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import TwitterIcon from "../../assets/TwitterIcon";
import * as css from "./SideMenu.styles";

const SideMenu = () => {
  return (
    <css.SideMenu>
      <css.SideMenuContainer>
        

        <css.SideMenuItems>
        <css.HomeMenuItem>
          <TwitterIcon />
        </css.HomeMenuItem>
          <css.MenuItem isSelected>
            <ExploreIcon />
            Explorar
          </css.MenuItem>
          <css.MenuItem>
            <ProfileIcon />
            Perfil
          </css.MenuItem>
        </css.SideMenuItems>
      </css.SideMenuContainer>
    </css.SideMenu>
  );
};

export default SideMenu;
