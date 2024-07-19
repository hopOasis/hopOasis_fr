import AsyncSelect from "react-select/async";
import "./styles.scss";
import { IProps } from "./types";
import { memo } from "react";

const AsyncSelectComponent = memo(
  ({ options = [], placeholder, id, onChange, value }: IProps) => {
    return (
      <AsyncSelect
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
