// import { Typography } from "@material-tailwind/react";
import UserInfo from "@/components/UserInfo";
import CE_Notes from "@/components/CE_Notes";
import ProjDetails from "@/components/ProjDetails";
import CR_Drive from "@/components/CR_Drive";
import Contract from "@/components/Contract";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        {/* <Typography variant="h1">FINAL AUDIT</Typography> */}
        <h1 className="text-2xl font-bold">FINAL AUDIT</h1>
        <UserInfo />
        <CE_Notes />
        <ProjDetails />
        <CR_Drive />
        <Contract />
      </div>
    </main>
  );
}
