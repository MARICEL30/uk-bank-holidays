import { useQuery } from "@tanstack/react-query";

export type DataResponse = {
  division: "england-and-wales" | "scotland" | "northern-ireland";
  events: Array<[]>;
};

export const useDaysRequest = () => {
  const url = "https://www.gov.uk/bank-holidays.json";

  let returnValues = useQuery<DataResponse>({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return returnValues;
};
