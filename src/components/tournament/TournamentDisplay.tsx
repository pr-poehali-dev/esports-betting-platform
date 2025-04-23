
import TournamentBracketVisualizer from "@/components/TournamentBracketVisualizer";
import { Tournament } from "@/types/tournament";

interface TournamentDisplayProps {
  tournament: Tournament;
  onMatchClick: (matchId: string) => void;
}

const TournamentDisplay = ({ tournament, onMatchClick }: TournamentDisplayProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-6">
      <h2 className="text-xl font-bold mb-6 text-center">
        {tournament.name}
      </h2>
      
      <TournamentBracketVisualizer 
        tournament={tournament}
        onMatchClick={onMatchClick}
      />
    </div>
  );
};

export default TournamentDisplay;
