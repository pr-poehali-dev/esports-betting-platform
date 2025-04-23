
import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Match = {
  id: number;
  team1: string;
  team2: string;
  time: string;
  tournament: string;
  coefficients: {
    team1Win: number;
    draw?: number;
    team2Win: number;
  };
  discipline: "dota2" | "csgo" | "lol";
  live?: boolean;
};

const Cybersport = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const matches: Match[] = [
    {
      id: 1,
      team1: "Team Spirit",
      team2: "Virtus.pro",
      time: "17:00",
      tournament: "ESL One",
      coefficients: { team1Win: 1.85, team2Win: 1.95 },
      discipline: "dota2",
      live: true
    },
    {
      id: 2,
      team1: "NAVI",
      team2: "G2 Esports",
      time: "18:30",
      tournament: "BLAST Premier",
      coefficients: { team1Win: 2.1, team2Win: 1.7 },
      discipline: "csgo"
    },
    {
      id: 3,
      team1: "T1",
      team2: "Gen.G",
      time: "13:00",
      tournament: "LCK Summer",
      coefficients: { team1Win: 1.5, draw: 3.5, team2Win: 2.4 },
      discipline: "lol"
    },
    {
      id: 4,
      team1: "PSG.LGD",
      team2: "Team Liquid",
      time: "20:15",
      tournament: "The International",
      coefficients: { team1Win: 1.35, team2Win: 3.1 },
      discipline: "dota2",
      live: true
    },
    {
      id: 5,
      team1: "FaZe Clan",
      team2: "Cloud9",
      time: "19:45",
      tournament: "IEM Katowice",
      coefficients: { team1Win: 1.8, team2Win: 2.0 },
      discipline: "csgo"
    }
  ];

  const filteredMatches = activeTab === "all" 
    ? matches 
    : matches.filter(match => match.discipline === activeTab);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Ставки на киберспорт</h1>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все дисциплины</TabsTrigger>
            <TabsTrigger value="dota2">Dota 2</TabsTrigger>
            <TabsTrigger value="csgo">CS:GO</TabsTrigger>
            <TabsTrigger value="lol">League of Legends</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="space-y-4">
            {filteredMatches.map(match => (
              <Card key={match.id} className="overflow-hidden">
                <CardHeader className="bg-[#1A1F2C] text-white pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg flex items-center">
                        {match.tournament}
                        {match.live && (
                          <Badge className="ml-2 bg-red-500">LIVE</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {match.discipline === "dota2" ? "Dota 2" : 
                         match.discipline === "csgo" ? "CS:GO" : "League of Legends"}
                      </CardDescription>
                    </div>
                    <div className="text-sm">{match.time}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <div className="w-2/5 text-center">
                      <div className="font-semibold text-lg">{match.team1}</div>
                      <Button 
                        variant="outline" 
                        className="mt-2 w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
                      >
                        {match.coefficients.team1Win}
                      </Button>
                    </div>
                    
                    <div className="w-1/5 text-center">
                      {match.coefficients.draw && (
                        <>
                          <div className="font-semibold text-lg">Ничья</div>
                          <Button 
                            variant="outline" 
                            className="mt-2 w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
                          >
                            {match.coefficients.draw}
                          </Button>
                        </>
                      )}
                      {!match.coefficients.draw && (
                        <div className="text-xl font-bold">VS</div>
                      )}
                    </div>
                    
                    <div className="w-2/5 text-center">
                      <div className="font-semibold text-lg">{match.team2}</div>
                      <Button 
                        variant="outline" 
                        className="mt-2 w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
                      >
                        {match.coefficients.team2Win}
                      </Button>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="bg-gray-50 dark:bg-gray-900">
                  <Button variant="ghost" className="text-[#9b87f5] hover:text-[#7E69AB] ml-auto">
                    Все ставки на матч
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 КиберСтавки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cybersport;
