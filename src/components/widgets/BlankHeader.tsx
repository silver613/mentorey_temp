import Link from "next/link";

export default function BlankHeader() {
  return (
    <>
      <div className="flex h-14 w-full items-center justify-between bg-slate-100 px-10">
        <div className="logo">
          <Link href={"/"} className="text-2xl font-bold">
            Mentorey
          </Link>
        </div>
        <Link href={"/logout"} className="hover:text-primary-600">
          Logout
        </Link>
      </div>
    </>
  );
}
