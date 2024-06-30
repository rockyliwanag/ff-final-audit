
import UserInfo from "@/components/UserInfo";
import CE_Notes from "@/components/CE_Notes";
import ProjDetails from "@/components/ProjDetails";
import CR_Drive from "@/components/CR_Drive";
import Contract from "@/components/Contract";
import SiteCapture from "@/components/SiteCapture";
import Aurora from "@/components/Aurora";
import Finance from "@/components/Finance";

import { GlobalProvider } from "@/app/contexts/globalContext";
import Link from "next/link";
// import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GlobalProvider>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">FINAL AUDIT</h1>
          <Link href="/">Reset</Link>
          <UserInfo />
          <CE_Notes />
          <ProjDetails />
          <CR_Drive />
          <Contract />
          <SiteCapture />
          <Aurora />
          <Finance />
        </div>
        {/* <Button color="green" ripple="light" ><a href='#'>Reset</a></Button> */}
      </GlobalProvider>
    </main>
  );
}
