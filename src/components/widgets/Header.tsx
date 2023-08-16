"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "~/components/atoms/Logo";
import ToggleMenu from "../atoms/ToggleMenu";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LoadingScreen from "../common/LoadingScreen";

const Header = () => {
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const [spin, setSpin] = useState(false);
  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  function redirect(path: string) {
    setSpin(true);
    router.push(path);
  }

  return (
    <>
      {spin && <LoadingScreen />}
      <header
        className={`sticky top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90`}
        id="header"
      >
        <div className="mx-auto w-full max-w-7xl px-3 py-2 md:flex md:justify-between md:px-4 md:py-2">
          <div className="flex justify-between">
            <Link className="flex items-center" href="/">
              <Logo className="" width={45} height={45} />
            </Link>
            <div className="flex items-center md:hidden">
              <ToggleMenu
                handleToggleMenuOnClick={handleToggleMenuOnClick}
                isToggleMenuOpen={isToggleMenuOpen}
              />
            </div>
          </div>
          <nav
            className={`${
              isToggleMenuOpen ? "block" : "hidden"
            } h-screen w-auto justify-end overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:w-full md:items-center md:overflow-visible`}
            aria-label="Main navigation"
          >
            <ul className="flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
              <Link
                className="flex items-center px-4 py-3 font-semibold transition duration-150 ease-in-out hover:text-primary-800"
                href={"/findcoach"}
              >
                Find a Coach
              </Link>
              <Link
                className="flex items-center px-4 py-3 font-semibold transition duration-150 ease-in-out hover:text-primary-800"
                href={"/seminar"}
              >
                Seminar
              </Link>
            </ul>
          </nav>
          <div
            className={`${
              isToggleMenuOpen ? "block" : "hidden"
            } fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-fit md:self-center md:p-0`}
          >
            <div className="flex w-full items-center justify-between md:w-auto">
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "100px" }}
                onClick={() => redirect("/signin")}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="bg-primary-600"
                sx={{ width: "100px", marginLeft: { md: "20px" } }}
                onClick={() => redirect("/auth/signup")}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
