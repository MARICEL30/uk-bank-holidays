import { useQuery } from "@tanstack/react-query";

type DataResponse = Array<DataResponse>;

export const Api = () => {
  const url = "https://www.gov.uk/bank-holidays.json";

  const data = useQuery<DataResponse>({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return data;
};
