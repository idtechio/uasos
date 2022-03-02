import type { FiltersProps } from "./types";
import { FiltersWraper } from "./style";
import SingleFilter from "./single";

const Filters = ({ filters }: FiltersProps) => {
  return (
    <FiltersWraper
      horizontal={true}
      centerContent={false}
      contentContainerStyle={{
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      {filters.map((filter, index) => {
        // TODO: fix index key
        return <SingleFilter {...filter} key={index} />;
      })}
    </FiltersWraper>
  );
};

export default Filters;
