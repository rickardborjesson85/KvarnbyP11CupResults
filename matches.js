// Lägg till cupar och match-ID:n här.
// Namn hämtas automatiskt från API:et.
window.MATCH_CONFIG = {
  cups: [
    {
      name: "Lampe 2026",
      baseUrl: "https://lampechallenge.cupmanager.net/rest/results_api/call",
      tournamentId: 69211459,
      teamIds: [75495747, 75495740]  
    },
    {
      name: "GBG 2026",
      baseUrl: "https://basketballfestival.se/rest/results_api/call",
      tournamentId: 67783971,
      teamIds: [72862094, 72862090]  
    },
    {
      name: "Södertälje 2025",
      baseUrl: "https://sodertaljeopen.cupmanager.net/rest/results_api/call",
      tournamentId: 61818160,
      teamIds: [62378915, 62378911]
    },
    {
      name: "Lund 2026",
      baseUrl: "https://lundaspelenbasketball.cupmanager.net/rest/results_api/call",
      tournamentId: 62149226,
      teamIds: [71674277, 63497320]
    },
    {
      name: "Copenhagen 2026",
      baseUrl: "https://cph-invitational.dk/rest/results_api/call",
      tournamentId: 69939565,
      teamIds: [74378470]
    }
  ]
};
