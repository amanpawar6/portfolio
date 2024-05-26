import Chip from "@material-ui/core/Chip";
// import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    // {
    //   date: "August 2022 - March 2023",
    //   cardTitle: "BLAZING CARDS",
    //   cardDetailedText: `This product involves purchasing, selling, and auctioning products. It serves largely as a marketplace where different retailers can sign up and list their products for sale. Additionally,
    //   vendors could stream and host live auctions for their products. The merchant portal includes a dashboard as well as additional elements such as a ledger and a payout. Additionally, the admin
    //   could control the entire application via its portal.`,
    //   technologies: ["Typescript", "Javascript", "NodeJs", "ExpressJs", "Socket.io", "MySQL", "typeORM", "MongoDB", "Docker", "AWS", "Jenkins"],
    //   Responsibilities: [
    //     "Socket.io Chat app",
    //     "Requirements Analysis",
    //     "Coding",
    //     "Debugging",
    //     "Application Maintenance",
    //     "Bug Fixing",
    //     "AWS implementation (S3, lambda, SES, SNS, SQS)",
    //     "Code/PR Review",
    //     "Code deploy on server"
    //   ].map(function (text) {
    //     return <li>{text}</li>;
    //   }),
    //   links: [
    //     {
    //       url: "https://dev.blazing-card-store-dev.kellton.net",
    //       text: "View Web Application",
    //     },
    //   ],
    // },
    {
      date: "August 2022 - March 2023",
      cardTitle: "BLAZING CARDS",
      cardDetailedText: `This product involves purchasing, selling, and auctioning products. It serves largely as a marketplace where different retailers can sign up and list their products for sale. Additionally,
      vendors could stream and host live auctions for their products. The merchant portal includes a dashboard as well as additional elements such as a ledger and a payout. Additionally, the admin
      could control the entire application via its portal.`,
      technologies: ["Typescript", "Javascript", "NodeJs", "ExpressJs", "Socket.io", "MySQL", "typeORM", "MongoDB", "Docker", "AWS", "Jenkins"],
      Responsibilities: [
        "Socket.io Chat app",
        "Requirements Analysis",
        "Coding",
        "Debugging",
        "Application Maintenance",
        "Bug Fixing",
        "AWS implementation (S3, lambda, SES, SNS, SQS)",
        "Code/PR Review",
        "Code deploy on server"
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      links: [
        {
          url: "https://dev.blazing-card-store-dev.kellton.net",
          text: "View Web Application",
        },
      ],
    },
    {
      date: "August 2020 - March 2023",
      cardTitle: "ARMA – AssetReliability Management Tool",
      cardDetailedText: `This project is for asset evaluation and plant audits. The goal of creating is to make it easier to audit their plants and assets and to go digital. This is basically an internal audit system that audits
      multiple assets in one place. After completing the task, the user can generate the PowerPoint presentation report according to the audit summary and score. Also, admins can change the criteria from the admin panel.`,
      technologies: ["Javascript", "NodeJs", "ExpressJs", "MySQL", "AWS"],
      Responsibilities: [
        "Requirements Analysis",
        "Coding",
        "Debugging",
        "Application Maintenance",
        "Bug Fixing",
        "AWS implementation",
        "Code/PR Review",
        "Code deploy on server"
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      links: [
        {
          url: "https://arma.niagarawater.com",
          text: "View Web Application",
        },
      ],
    },
    {
      date: "September 2020 - March 2023",
      cardTitle: "Niagara Bottlings - CICO",
      cardDetailedText: "This project involves managing the truck flow in their production plants. The purpose of creating this is to remove the long queue in an easier way and go digital. This is basically an internal truck management system that is used by multiple plants. In this way, the user can book their lane before entering the plant and also check the available slots. We are also using all of the drivers feedback to improve the application.",
      technologies: ["Javascript", "NodeJs", "ExpressJs", "MySQL", "AWS"],
      Responsibilities: [
        "Requirements Analysis",
        "Coding",
        "Debugging",
        "Application Maintenance",
        "Bug Fixing",
        "AWS implementation",
        "Code/PR Review",
        "Code deploy on server"
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      links: [
        {
          url: "https://kiosk.niagarawater.com",
          text: "View Web Application",
        },
      ],
    },
    {
      date: "June 2022 - August 2022",
      cardTitle: "AlixPartners",
      cardDetailedText:
        "This project is a build for the internal use of the organization. In this project, we have developed small microservices for each module and integrated at one place.",
      technologies: ["NodeJs", "ExpressJs", "AWS", "Firebase", "Gitlabs"],
    },
    {
      date: "May 2022 - July 2022",
      cardTitle: "HUMBL Pay",
      cardDetailedText: "A payment platform that is integrated with any application.",
      technologies: ["NodeJS", "ExpressJS", "AWS", "sendgrid"],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [showLessButton, setShowLessButton] = useState(false);

  const loadMore = () => {
    setLimit(prevLimit => Math.min(prevLimit + 3, items.length));
    setShowLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setShowLessButton(false);
  };

  return (
    <section id="projects" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.Responsibilities ? <h4>Role & Responsibilities</h4> : ""}
                    {data.Responsibilities}
                  </p>
                  <div className="project-links">
                    {data?.links?.length && data?.links?.map((link, j) => (
                      <div key={j}>
                        <br></br>
                        <Button
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {limit < items.length && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {showLessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="remove">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
