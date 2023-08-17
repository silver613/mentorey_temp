import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PageviewIcon from "@mui/icons-material/Pageview";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ForumIcon from "@mui/icons-material/Forum";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import Logo from "~/components/atoms/Logo";
import { useRouter } from "next/navigation";
import LoadingScreen from "../common/LoadingScreen";
import { useSelector } from "react-redux";
import { selectAuthState } from "~/slices/userSlice";

function InHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const curUser = useSelector(selectAuthState);
  React.useEffect(() => {
    // console.log(curUser['custom:is_teacher']);
  }, [curUser]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function redirect(path: string) {
    setLoading(true);
    router.push(path);
  }

  function signOut() {
    // setLoading(true);
    // Auth.signOut()
    //   .then((res) => {
    //     redirect("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <>
      {loading && <LoadingScreen />}
      <AppBar
        position="static"
        className="flex h-16 items-center border-b border-slate-400"
        sx={{ backgroundColor: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo
              className="mx-auto my-2 hidden md:flex"
              width={40}
              height={40}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={() => router.push("/pupil/learn")}>
                  <ListItemIcon>
                    <CastForEducationIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <Typography>Learn</Typography>
                </MenuItem>
                <MenuItem onClick={() => router.push("/pupil/findcoach")}>
                  <ListItemIcon>
                    <PageviewIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <Typography textAlign="center">Find a Coach</Typography>
                </MenuItem>
                <MenuItem onClick={() => router.push("/pupil/seminar")}>
                  <ListItemIcon>
                    <Diversity1Icon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <Typography textAlign="center">Seminar</Typography>
                </MenuItem>
                <MenuItem onClick={() => router.push("/message")}>
                  <ListItemIcon>
                    <ForumIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <Typography textAlign="center">Message</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Logo className="mx-auto flex md:hidden" width={40} height={40} />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => router.push("/pupil/learn")}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#059669",
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0px 16px",
                }}
              >
                <CastForEducationIcon className="mx-auto block" />
                Learn
              </Button>
              <Button
                onClick={() => router.push("/pupil/findcoach")}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#059669",
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0px 16px",
                }}
              >
                <PageviewIcon className="mx-auto block" />
                Find a Coach
              </Button>
              <Button
                onClick={() => router.push("/pupil/seminar")}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#059669",
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0px 16px",
                }}
              >
                <Diversity1Icon className="mx-auto block" />
                Seminar
              </Button>
              <Button
                // onClick={toMessage}
                onClick={() => redirect("/message")}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#059669",
                  fontSize: 14,
                  fontWeight: 600,
                  margin: "0px 16px",
                }}
              >
                <ForumIcon className="mx-auto block" />
                Message
              </Button>
            </Box>
            {/* desktop */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ width: 36, height: 36 }}
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => redirect(`/uprof/${curUser?.["sub"]}`)}
                >
                  <ListItemIcon>
                    <AccountCircleIcon fontSize="small" />
                  </ListItemIcon>
                  My User Profile
                </MenuItem>
                {curUser && Boolean(Number(curUser["custom:is_teacher"])) ? (
                  <MenuItem
                    onClick={() => redirect(`/tprof/${curUser?.["sub"]}`)}
                  >
                    <ListItemIcon>
                      <CoPresentIcon fontSize="small" />
                    </ListItemIcon>
                    My Teacher Profile
                  </MenuItem>
                ) : null}
                <Divider />
                <MenuItem onClick={() => redirect(`/uprof_edit`)}>
                  <ListItemIcon>
                    <BorderColorIcon fontSize="small" />
                  </ListItemIcon>
                  Edit my profile
                </MenuItem>
                {curUser
                  ? !Boolean(Number(curUser["custom:is_teacher"])) && (
                      <MenuItem onClick={() => redirect("/coach/be_coach")}>
                        <ListItemIcon>
                          <AssignmentIndIcon fontSize="small" />
                        </ListItemIcon>
                        Become a Teacher
                      </MenuItem>
                    )
                  : null}
                {curUser && Boolean(Number(curUser["custom:is_teacher"])) && (
                  <MenuItem onClick={() => router.push(`/coach/new_lesson`)}>
                    <ListItemIcon>
                      <AddToPhotosIcon fontSize="small" />
                    </ListItemIcon>
                    Create a new Lesson
                  </MenuItem>
                )}
                {curUser && Boolean(Number(curUser["custom:is_teacher"])) && (
                  <MenuItem onClick={() => router.push(`/coach/dashboard`)}>
                    <ListItemIcon>
                      <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    My Teacher Dashboard
                  </MenuItem>
                )}
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={signOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default InHeader;
