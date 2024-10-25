import { useQuery } from "@tanstack/react-query";

type Props = {
  division: string;
  events: Array<[]>;
};

const todaysDate = new Date();

export const useDaysRequest = () => {
  const url = "https://www.gov.uk/bank-holidays.json";
  console.log(todaysDate.toDateString());

  let returnValues = useQuery({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return returnValues;
};
