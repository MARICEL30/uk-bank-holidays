import { useQuery } from "@tanstack/react-query";

export type ReturnApiProps = {
  "england-and-wales": {
    division: "england-and-wales";
    events: [];
  };
  scotland: {
    division: "scotland";
    events: [];
  };
  "northern-ireland": {
    division: "northern-ireland";
    events: [];
  };
};

export const useDaysRequest = () => {
  const url = "https://www.gov.uk/bank-holidays.json";

  let returnValues = useQuery<ReturnApiProps>({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return returnValues;
};
