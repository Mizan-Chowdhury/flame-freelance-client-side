import { Tab, Tabs as ReactTabs } from "@mui/material";
import { useState } from "react";

const Categories = () => {
  const [value, setValue] = useState("Web development");

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  console.log(value);
  return (
    <div>
      <ReactTabs
        className="text-white"
        value={value}
        onChange={handleChange}
        textColor=""
        indicatorColor="secondary"
      >
        <Tab value="Web development" label="Web development" />
        <Tab value="Digital marketing" label="Digital marketing" />
        <Tab value="Graphics design" label="Graphics design" />
      </ReactTabs>
      <TabPanel value={value}>{value}</TabPanel>
    </div>
  );

  function TabPanel(props) {
    const {children} = props;
    return (
      <div>
        {<h1>{children}</h1>}
      </div>
    );
  }
};

export default Categories;
