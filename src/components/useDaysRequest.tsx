import { useQuery } from "@tanstack/react-query";

type Props = {
  division: string;
  events: Array<[]>;
};

export const useDaysRequest = () => {
  const url = "https://www.gov.uk/bank-holidays.json";

  let returnValues = useQuery({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return returnValues;
};
