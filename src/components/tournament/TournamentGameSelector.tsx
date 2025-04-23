
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TournamentGameSelectorProps {
  selectedGame: string;
  onGameChange: (game: string) => void;
}

const TournamentGameSelector = ({
  selectedGame,
  onGameChange,
}: TournamentGameSelectorProps) => {
  return (
    <div className="w-full md:w-1/3">
      <Label htmlFor="game-select" className="mb-2 block">Дисциплина</Label>
      <Tabs
        value={selectedGame}
        onValueChange={onGameChange}
        className="w-full"
      >
        <TabsList className="w-full">
          <TabsTrigger value="dota2" className="flex-1">Dota 2</TabsTrigger>
          <TabsTrigger value="csgo" className="flex-1">CS:GO</TabsTrigger>
          <TabsTrigger value="lol" className="flex-1">League of Legends</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TournamentGameSelector;
