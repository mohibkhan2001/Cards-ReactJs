import React from "react";
import Cards from "./components/Cards";

const App = () => {
  const jobListings = [
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      postedWhen: "2 days ago",
      jobPosition: "Frontend Developer",
      jobType: "Remote",
      payPerHour: "$45/Hour",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      postedWhen: "5 days ago",
      jobPosition: "Software Engineer",
      jobType: "Full-time",
      payPerHour: "$60/Hour",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      postedWhen: "1 week ago",
      jobPosition: "UI/UX Designer",
      jobType: "Hybrid",
      payPerHour: "$50/Hour",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      postedWhen: "3 days ago",
      jobPosition: "Backend Developer",
      jobType: "Full-time",
      payPerHour: "$55/Hour",
    },

    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      postedWhen: "4 days ago",
      jobPosition: "Cloud Engineer",
      jobType: "Remote",
      payPerHour: "$58/Hour",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      companyName: "Tesla",
      postedWhen: "1 day ago",
      jobPosition: "Data Analyst",
      jobType: "Part-time",
      payPerHour: "$40/Hour",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      companyName: "LinkedIn",
      postedWhen: "6 days ago",
      jobPosition: "Product Manager",
      jobType: "Full-time",
      payPerHour: "$65/Hour",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
      companyName: "Netflix",
      postedWhen: "3 days ago",
      jobPosition: "Full Stack Engineer",
      jobType: "Remote",
      payPerHour: "$70/Hour",
    },
  ];

  return (
    <div className="flex flex-wrap justify-around">
      {jobListings.map(function (elem) {
        return (
          <Cards
            company={elem.companyName}
            posted={elem.postedWhen}
            jobPosition={elem.jobPosition}
            jobType={elem.jobType}
            pay={elem.payPerHour}
            companyLogo={elem.companyLogo}
          />
        );
      })}
    </div>
  );
};

export default App;
