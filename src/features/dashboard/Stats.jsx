/* eslint-disable no-unused-vars */

import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase></HiOutlineBriefcase>}
        value={numBookings}
      ></Stat>
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes></HiOutlineBanknotes>}
        value={formatCurrency(sales)}
      ></Stat>
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays></HiOutlineCalendarDays>}
        value={checkins}
      ></Stat>
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar></HiOutlineChartBar>}
        value={Math.round(occupation * 100) + "%"}
      ></Stat>
    </>
  );
}

export default Stats;
