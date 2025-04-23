
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type Match = {
  id: string;
  team1: {
    name: string;
    score?: number;
    logo?: string;
  };
  team2: {
    name: string;
    score?: number;
    logo?: string;
  };
  date: string;
  time: string;
  status: "upcoming" | "live" | "completed";
  winner?: "team1" | "team2";
};

export type Round = {
  name: string;
  matches: Match[];
};

export type Tournament = {
  id: string;
  name: string;
  game: "dota2" | "csgo" | "lol";
  rounds: Round[];
};

interface TournamentBracketVisualizerProps {
  tournament: Tournament;
  onMatchClick?: (matchId: string) => void;
}

const TournamentBracketVisualizer = ({
  tournament,
  onMatchClick,
}: TournamentBracketVisualizerProps) => {
  const maxRounds = tournament.rounds.length;
  
  // Find the round with the most matches to ensure proper spacing
  const maxMatchesInARound = Math.max(
    ...tournament.rounds.map(round => round.matches.length)
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="tournament-bracket p-4 min-w-[800px]">
        <div className="flex justify-between items-start gap-8">
          {tournament.rounds.map((round, roundIndex) => (
            <div 
              key={round.name} 
              className={cn(
                "flex flex-col gap-4 min-w-[240px]",
                roundIndex > 0 && "mt-[20px]"
              )}
              style={{
                // Increase spacing between matches for later rounds
                gap: `${(roundIndex + 1) * 20}px`
              }}
            >
              <h3 className="text-center font-bold text-[#9b87f5] mb-2">
                {round.name}
              </h3>
              
              {round.matches.map((match, matchIndex) => (
                <Card 
                  key={match.id}
                  className={cn(
                    "tournament-match transition-all cursor-pointer hover:shadow-md",
                    match.status === "live" && "border-red-500 border-2"
                  )}
                  onClick={() => onMatchClick?.(match.id)}
                >
                  <CardHeader className="p-3 pb-1 bg-[#1A1F2C] text-white">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm font-medium">
                        {match.date} • {match.time}
                      </CardTitle>
                      <StatusBadge status={match.status} />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                      <TeamDisplay 
                        team={match.team1}
                        isWinner={match.winner === "team1"}
                      />
                      <div className="text-center text-xs text-gray-500 my-1">VS</div>
                      <TeamDisplay 
                        team={match.team2}
                        isWinner={match.winner === "team2"}
                      />
                    </div>
                    
                    <div className="mt-3 text-center">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-xs text-[#9b87f5] hover:bg-[#9b87f5]/10"
                      >
                        Сделать ставку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: Match["status"] }) => {
  if (status === "live") {
    return <Badge className="bg-red-500 animate-pulse">LIVE</Badge>;
  }
  
  if (status === "completed") {
    return <Badge variant="outline">Завершен</Badge>;
  }
  
  return <Badge variant="secondary">Скоро</Badge>;
};

const TeamDisplay = ({ 
  team, 
  isWinner = false 
}: { 
  team: Match["team1"] | Match["team2"], 
  isWinner?: boolean 
}) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-between p-2 rounded-md",
        isWinner && "bg-[#9b87f5]/10"
      )}
    >
      <div className="flex items-center gap-2">
        {team.logo ? (
          <img src={team.logo} alt={team.name} className="w-6 h-6 object-contain" />
        ) : (
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        )}
        <span className={cn(
          "font-medium", 
          isWinner && "text-[#9b87f5] font-semibold"
        )}>
          {team.name}
        </span>
      </div>
      
      {typeof team.score !== "undefined" && (
        <span className={cn(
          "font-bold", 
          isWinner && "text-[#9b87f5]"
        )}>
          {team.score}
        </span>
      )}
    </div>
  );
};

export default TournamentBracketVisualizer;
