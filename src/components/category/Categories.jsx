// import { Tab, Tabs , Box } from "@mui/material";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import CategoriesCard from "./CategoriesCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Categories = () => {
  const [value, setValue] = useState("Web development");
  const [allJobs, setAllJobs] = useState();

  const items = ["Web development", "Digital marketing", "Graphics design"];

  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`/allJob/${value}`)
      .then((res) => {
        setAllJobs(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, [value, axios]);
  return (
    <div className="px-4">
      <Tabs className="">
        <TabList className="flex gap-5 lg:gap-10 text-white lg:text-2xl">
          {items.map((item) => (
            <Tab
              className={item === value ? "active-tabs" : ""}
              key={item}
              onClick={() => handleChange(item)}
            >
              {item}
            </Tab>
          ))}
        </TabList>
        {items.map((item) => (
          <TabPanel className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"} key={item}>
            {allJobs?.map((job) => (
              <div className="py-10" key={job?._id}>
                <CategoriesCard job={job}></CategoriesCard>
              </div>
            ))}
          </TabPanel>
        ))}

        {/* <TabPanel>
          {allJobs?.map((job) => (
            <CategoriesCard key={job._id} job={job}></CategoriesCard>
          ))}
        </TabPanel> */}

        {/* <TabPanel value=''>{data?.data}</TabPanel> */}
      </Tabs>
    </div>
  );
};

export default Categories;
