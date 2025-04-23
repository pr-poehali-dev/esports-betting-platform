
import { Tournament } from "@/types/tournament";

// Данные турниров
export const tournaments: Tournament[] = [
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
