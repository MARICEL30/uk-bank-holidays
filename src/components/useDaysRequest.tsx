import { useQuery } from "@tanstack/react-query";

export const useDaysRequest = () => {
  const url = "https://www.gov.uk/bank-holidays.json";

  let returnValues = useQuery({
    queryKey: ["daysData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  console.log("Hello");
  console.log(returnValues);
  console.log(["england-and-wales"].length);
  console.log(["england-and-wales"][0]);
  console.log("Pura vida");

  console.log("alala");

  return returnValues;
};
