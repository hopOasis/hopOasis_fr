import AsyncSelect from "react-select/async";
import { IProps } from "./types";
import { memo } from "react";
import { styles } from "./select-styles.js";
import gsap from "gsap";

const AsyncSelectComponent = memo(
  ({ options = [], placeholder, id, onChange, value }: IProps) => {
    return (
      <AsyncSelect
        // onMenuOpen={() =>
        //   gsap.set("html", {
        //     // overflow: "hidden",
        //     // className: "-=lenis",
        //   })
        // }
        // onMenuClose={() => gsap.set("html", { overflow: "auto" })}
        styles={styles}
        id={id}
        placeholder={placeholder}
        cacheOptions
        loadOptions={options}
        onChange={(value) => onChange(value)}
        isClearable
        defaultOptions
        defaultValue={value}
      />
    );
  }
);

export default AsyncSelectComponent;
