import type { FiltersProps } from "./types";
import { FiltersWraper } from "./style";
import SingleFilter from "./single";
import { StyleSheet } from "react-native";

function Filters<T>({ filters }: FiltersProps<T>) {
  return (
    <FiltersWraper
      horizontal
      centerContent={false}
      contentContainerStyle={styles.wrapper}
    >
      {filters.map((filter) => (
        <SingleFilter {...filter} key={filter.name} />
      ))}
    </FiltersWraper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

export default Filters;
