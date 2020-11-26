export const cinemaOptions = [
  {
    label: 'UNKNOWN Hà Nội',
    value: 'hanoi'
  },
  {
    label: 'UNKNOWN Sài Gòn',
    value: 'hochiminh'
  },
  {
    label: 'UNKNOWN BMT',
    value: 'bmt'
  },
];

export type DataType = {
  value: string;
  label: string;
};

export const CountryOptions: DataType[] = [
  { label: 'VietNam', value: 'vietnam' },
  { label: 'USA', value: 'usa' },
  { label: 'Korea', value: 'korea' },
  { label: 'Japan', value: 'japan' },
  { label: 'China', value: 'china' },
  { label: 'UK', value: 'uk' },
  { label: 'Russia', value: 'russia' },
];

export const GenreOptions: DataType[] = [
  { label: 'Action', value: 'action' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Crime', value: 'crime' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Historical', value: 'historical' },
  { label: 'Historical Fiction', value: 'historicalFiction' },
  { label: 'Horror', value: 'horror' },
  { label: 'Mystery', value: 'mystery' },
  { label: 'Political', value: 'political' },
];
