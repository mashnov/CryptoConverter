import BigNumber from 'bignumber.js';

export const getCurrencyCost = ({ currencyFromValue, currencyFrom, currencyTo }) => {
  const fromCost = currencyFrom.cost;
  const toCost = currencyTo.cost;
  const value = currencyFromValue * fromCost / toCost;
  return new BigNumber(value).toFormat(2);
};

export const getChartsData = ({ currencyFrom, currencyTo, defaultCurrency, chartLabels }) => {
  const labels = chartLabels;
  const fromIsDefault = currencyFrom.title === defaultCurrency.title;
  const toIsDefault = currencyTo.title === defaultCurrency.title;
  const fromVsTo = {
    borderColor: '#009ee4',
    backgroundColor: '#cae5ff',
    label: `${currencyFrom.title} / ${currencyTo.title}`,
    data: currencyTo.history.map((cost, index) => (getCurrencyCost({
      currencyFromValue: 1,
      currencyTo: { cost },
      currencyFrom: { cost: currencyFrom.history[index] },
    }))),
  };
  const fromVsDefault = {
    data: currencyFrom.history,
    label: `${currencyFrom.title} / ${defaultCurrency.title}`,
    borderColor: '#34A853',
    backgroundColor: '#93ffaa',
  };
  const toVSVsDefault = {
    data: currencyTo.history,
    label: `${currencyTo.title} / ${defaultCurrency.title}`,
    borderColor: '#fbbc05',
    backgroundColor: '#fbeaa5',
  };
  let datasets = [];

  if (!fromIsDefault && !toIsDefault) {
    datasets = [fromVsTo, fromVsDefault, toVSVsDefault];
  }
  if (!fromIsDefault && toIsDefault) {
    datasets = [fromVsTo];
  }
  if (fromIsDefault && !toIsDefault) {
    datasets = [fromVsTo, toVSVsDefault];
  }

  return { labels, datasets };
};
