
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tournament } from "@/types/tournament";

interface TournamentSelectorProps {
  tournaments: Tournament[];
  selectedTournament: string;
  onTournamentChange: (tournamentId: string) => void;
}

const TournamentSelector = ({
  tournaments,
  selectedTournament,
  onTournamentChange,
}: TournamentSelectorProps) => {
  return (
    <div className="w-full md:w-2/3">
      <Label htmlFor="tournament-select" className="mb-2 block">Турнир</Label>
      <Select 
        value={selectedTournament} 
        onValueChange={onTournamentChange}
      >
        <SelectTrigger id="tournament-select">
          <SelectValue placeholder="Выберите турнир" />
        </SelectTrigger>
        <SelectContent>
          {tournaments.map(tournament => (
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
  );
};

export default TournamentSelector;
