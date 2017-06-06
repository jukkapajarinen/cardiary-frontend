export function updateStatsChoices(statsChoices) {
  return {
    type: 'STATISTICS_UPDATE_CHOICES',
    payload: {'statsChoices': statsChoices}
  };
}

export function updateStatsData(statsSelected, statsTotalRefuels, statsTotalPrice, statsTotalDistance, statsTotalVolume) {
  return {
    type: 'STATISTICS_UPDATE_DATA',
    payload: {
      'statsSelected': statsSelected,
      'statsTotalRefuels': statsTotalRefuels,
      'statsTotalPrice': statsTotalPrice,
      'statsTotalDistance': statsTotalDistance,
      'statsTotalVolume': statsTotalVolume
    }
  };
}