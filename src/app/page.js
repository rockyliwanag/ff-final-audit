import UserInfo from "@/components/UserInfo";
import CE_Notes from "@/components/CE_Notes";
import ProjDetails from "@/components/ProjDetails";

export default function Home() {
// {console.log("tieIn", tieIn)}
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">FINAL AUDIT</h1>
        <UserInfo />
        <CE_Notes />
        <ProjDetails />
      </div>
    </main>
  );
}
