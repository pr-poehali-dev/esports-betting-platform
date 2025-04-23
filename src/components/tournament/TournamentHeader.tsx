
import { Trophy } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const TournamentHeader = () => {
  return (
    <>
      <div className="flex items-center mb-8">
        <Trophy className="h-8 w-8 text-[#9b87f5] mr-3" />
        <h1 className="text-3xl font-bold">Турнирные сетки</h1>
      </div>
      
      <Alert className="mb-6 bg-[#1A1F2C]/5 border-[#9b87f5]/30">
        <Info className="h-4 w-4 text-[#9b87f5]" />
        <AlertDescription>
          Просматривайте предстоящие и текущие турниры по вашим любимым киберспортивным дисциплинам.
          Делайте ставки на матчи и следите за результатами в реальном времени.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default TournamentHeader;
