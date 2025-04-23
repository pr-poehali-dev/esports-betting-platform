
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
