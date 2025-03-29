import UserInfo from "@/components/UserInfo";
import CE_Notes from "@/components/CE_Notes";
import ProjDetails from "@/components/ProjDetails";
import Finance from "@/components/Finance";
import Adders from "@/components/Adders";
import Navigate from "@/components/Navigation";
import { GlobalProvider } from "@/app/contexts/globalContext";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GlobalProvider>
        <div className="flex flex-col">
            <Navigate />
            <h1 className="text-3xl font-bold">FINAL AUDIT</h1>
            <UserInfo />
            <Finance />
            <ProjDetails />
            <CE_Notes />
            <Adders />
        </div>
      </GlobalProvider>
    </main>
  );
}
