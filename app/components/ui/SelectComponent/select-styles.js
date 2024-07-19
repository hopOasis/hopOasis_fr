export const styles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    maxWidth: 480,
    borderColor: "#b3b3b2",
    transition: "border-color 0.25s ease-out",
    boxShadow: state.isFocused ? "unset" : "unset",
    ":hover": {
      borderColor: "#ff9a00",
    },
  }),
  menuList: (base, state) => ({
    ...base,
    color: "white",
    borderRadius: 4,
    "::-webkit-scrollbar": {
      width: 10,
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#b3b3b2",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  }),
  option: (base, state) => ({
    ...base,
    color: state.isActive ? "#8C8C8C" : "#8C8C8C",
    backgroundColor: "transparent",
    ":hover": {
      backgroundColor: "#f4f4f4",
    },
  }),
  indicatorSeparator: (base, state) => ({ ...base, display: "none" }),
  container: (base) => ({ ...base }),
};
