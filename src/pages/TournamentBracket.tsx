
import { useState } from "react";
import Header from "@/components/Header";
import TournamentBracketVisualizer, { Tournament } from "@/components/TournamentBracketVisualizer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Trophy } from "lucide-react";

// Пример данных турниров
const tournaments: Tournament[] = [
  {
    id: "ti2023",
    name: "The International 2023",
    game: "dota2",
    rounds: [
      {
        name: "Четвертьфинал",
        matches: [
          {
            id: "qf1",
            team1: { name: "Team Spirit", score: 2 },
            team2: { name: "PSG.LGD", score: 0 },
            date: "12.05.2023",
            time: "15:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf2",
            team1: { name: "Team Liquid", score: 2 },
            team2: { name: "Tundra Esports", score: 1 },
            date: "12.05.2023",
            time: "18:30",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf3",
            team1: { name: "Gaimin Gladiators", score: 1 },
            team2: { name: "Talon Esports", score: 2 },
            date: "13.05.2023",
            time: "15:00",
            status: "completed",
            winner: "team2"
          },
          {
            id: "qf4",
            team1: { name: "OG", score: 0 },
            team2: { name: "Evil Geniuses", score: 2 },
            date: "13.05.2023",
            time: "18:30",
            status: "completed",
            winner: "team2"
          }
        ]
      },
      {
        name: "Полуфинал",
        matches: [
          {
            id: "sf1",
            team1: { name: "Team Spirit", score: 2 },
            team2: { name: "Team Liquid", score: 1 },
            date: "15.05.2023",
            time: "16:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "sf2",
            team1: { name: "Talon Esports", score: 0 },
            team2: { name: "Evil Geniuses", score: 2 },
            date: "15.05.2023",
            time: "19:30",
            status: "completed",
            winner: "team2"
          }
        ]
      },
      {
        name: "Финал",
        matches: [
          {
            id: "final",
            team1: { name: "Team Spirit" },
            team2: { name: "Evil Geniuses" },
            date: "17.05.2023",
            time: "17:00",
            status: "live"
          }
        ]
      }
    ]
  },
  {
    id: "blast2023",
    name: "BLAST Premier Spring Final 2023",
    game: "csgo",
    rounds: [
      {
        name: "Четвертьфинал",
        matches: [
          {
            id: "qf1",
            team1: { name: "NAVI", score: 2 },
            team2: { name: "Complexity", score: 0 },
            date: "20.05.2023",
            time: "14:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf2",
            team1: { name: "G2", score: 2 },
            team2: { name: "Cloud9", score: 1 },
            date: "20.05.2023",
            time: "17:30",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf3",
            team1: { name: "FaZe", score: 1 },
            team2: { name: "Vitality", score: 2 },
            date: "21.05.2023",
            time: "14:00",
            status: "completed",
            winner: "team2"
          },
          {
            id: "qf4",
            team1: { name: "ENCE", score: 2 },
            team2: { name: "Fnatic", score: 1 },
            date: "21.05.2023",
            time: "17:30",
            status: "completed",
            winner: "team1"
          }
        ]
      },
      {
        name: "Полуфинал",
        matches: [
          {
            id: "sf1",
            team1: { name: "NAVI" },
            team2: { name: "G2" },
            date: "24.05.2023",
            time: "16:00",
            status: "upcoming"
          },
          {
            id: "sf2",
            team1: { name: "Vitality" },
            team2: { name: "ENCE" },
            date: "24.05.2023",
            time: "19:30",
            status: "upcoming"
          }
        ]
      },
      {
        name: "Финал",
        matches: [
          {
            id: "final",
            team1: { name: "TBD" },
            team2: { name: "TBD" },
            date: "26.05.2023",
            time: "18:00",
            status: "upcoming"
          }
        ]
      }
    ]
  },
  {
    id: "lck2023",
    name: "LCK Summer 2023",
    game: "lol",
    rounds: [
      {
        name: "Четвертьфинал",
        matches: [
          {
            id: "qf1",
            team1: { name: "T1", score: 3 },
            team2: { name: "KT Rolster", score: 1 },
            date: "05.06.2023",
            time: "10:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf2",
            team1: { name: "Gen.G", score: 3 },
            team2: { name: "Dplus KIA", score: 0 },
            date: "05.06.2023",
            time: "14:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf3",
            team1: { name: "Hanwha Life", score: 3 },
            team2: { name: "Liiv SANDBOX", score: 2 },
            date: "06.06.2023",
            time: "10:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "qf4",
            team1: { name: "DRX", score: 1 },
            team2: { name: "Kwangdong Freecs", score: 3 },
            date: "06.06.2023",
            time: "14:00",
            status: "completed",
            winner: "team2"
          }
        ]
      },
      {
        name: "Полуфинал",
        matches: [
          {
            id: "sf1",
            team1: { name: "T1", score: 3 },
            team2: { name: "Gen.G", score: 2 },
            date: "10.06.2023",
            time: "10:00",
            status: "completed",
            winner: "team1"
          },
          {
            id: "sf2",
            team1: { name: "Hanwha Life", score: 3 },
            team2: { name: "Kwangdong Freecs", score: 1 },
            date: "10.06.2023",
            time: "14:00",
            status: "completed",
            winner: "team1"
          }
        ]
      },
      {
        name: "Финал",
        matches: [
          {
            id: "final",
            team1: { name: "T1" },
            team2: { name: "Hanwha Life" },
            date: "15.06.2023",
            time: "11:00",
            status: "upcoming"
          }
        ]
      }
    ]
  }
];

const TournamentBracket = () => {
  const [selectedGame, setSelectedGame] = useState<string>("dota2");
  const [selectedTournament, setSelectedTournament] = useState<string>("ti2023");
  
  const filteredTournaments = tournaments.filter(
    tournament => tournament.game === selectedGame
  );
  
  const currentTournament = tournaments.find(
    tournament => tournament.id === selectedTournament
  ) || tournaments[0];
  
  const handleMatchClick = (matchId: string) => {
    // В будущем здесь можно добавить переход на страницу матча
    console.log("Clicked on match:", matchId);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
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

        <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4">
          <div className="w-full md:w-1/3">
            <Label htmlFor="game-select" className="mb-2 block">Дисциплина</Label>
            <Tabs
              value={selectedGame}
              onValueChange={setSelectedGame}
              className="w-full"
            >
              <TabsList className="w-full">
                <TabsTrigger value="dota2" className="flex-1">Dota 2</TabsTrigger>
                <TabsTrigger value="csgo" className="flex-1">CS:GO</TabsTrigger>
                <TabsTrigger value="lol" className="flex-1">League of Legends</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="w-full md:w-2/3">
            <Label htmlFor="tournament-select" className="mb-2 block">Турнир</Label>
            <Select 
              value={selectedTournament} 
              onValueChange={setSelectedTournament}
            >
              <SelectTrigger id="tournament-select">
                <SelectValue placeholder="Выберите турнир" />
              </SelectTrigger>
              <SelectContent>
                {filteredTournaments.map(tournament => (
                  <SelectItem 
                    key={tournament.id} 
                    value={tournament.id}
                  >
                    {tournament.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-6">
          <h2 className="text-xl font-bold mb-6 text-center">
            {currentTournament.name}
          </h2>
          
          <TournamentBracketVisualizer 
            tournament={currentTournament}
            onMatchClick={handleMatchClick}
          />
        </div>
      </main>
      
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 КиберСтавки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default TournamentBracket;
