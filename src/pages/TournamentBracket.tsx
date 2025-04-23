
import { useState } from "react";
import Header from "@/components/Header";
import AppFooter from "@/components/layout/AppFooter";
import TournamentHeader from "@/components/tournament/TournamentHeader";
import TournamentGameSelector from "@/components/tournament/TournamentGameSelector";
import TournamentSelector from "@/components/tournament/TournamentSelector";
import TournamentDisplay from "@/components/tournament/TournamentDisplay";
import { tournaments } from "@/data/tournaments";

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
        <TournamentHeader />
        
        <div className="mb-8 flex flex-col md:flex-row md:items-end gap-4">
          <TournamentGameSelector 
            selectedGame={selectedGame}
            onGameChange={setSelectedGame}
          />
          
          <TournamentSelector 
            tournaments={filteredTournaments}
            selectedTournament={selectedTournament}
            onTournamentChange={setSelectedTournament}
          />
        </div>
        
        <TournamentDisplay 
          tournament={currentTournament}
          onMatchClick={handleMatchClick}
        />
      </main>
      
      <AppFooter />
    </div>
  );
};

export default TournamentBracket;
