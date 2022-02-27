import type { FiltersProps } from "./types";
import { FiltersWraper } from "./style";
import SingleFilter from "./single";

const Filters = ({ filters }: FiltersProps) => {
  return (
    <FiltersWraper>
      {filters.map((filter) => {
        return <SingleFilter {...filter} />;
      })}
    </FiltersWraper>
  );
};

export default Filters;
