import { useQuery } from "@tanstack/react-query";

// type DataResponse = Array<DataResponse>;

// eslint-disable-next-line no-empty-pattern

type Props = {
  date: string;
  title: string;
};

export const useDaysRequest = ({ date, title }: Props) => {
  const url = "https://www.gov.uk/bank-holidays.json";

  const response = useQuery({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  console.log(response);
  return response;
};
