import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useCabin } from "../cabins/useCabins";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoading3 } = useCabin();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner></Spinner>;

  console.log(bookings);
  console.log(stays);
  console.log(confirmedStays);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      ></Stats>
      <TodayActivity></TodayActivity>
      <DurationChart confirmedStays={confirmedStays}></DurationChart>
      <SalesChart bookings={bookings} numDays={numDays}></SalesChart>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
