import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "April 2023 – Present",
      cardTitle: "iProgrammmer Solutions Limited",
      cardSubtitle: "Software Developer",
      cardDetailedText: [
        "Developed applications using Node.js for backend RESTful APIs.",
        "Wrote SQL queries and MongoDB aggregations for data updating and retrieval. Also used various ORMs for developing applications",
        "Worked on the support team for production Severity 1 and 2 cases."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "December 2020 – April 2023",
      cardTitle: "Kellton Solutions Limited",
      cardSubtitle: "Software Developer",
      cardDetailedText: [
        "Developed applications using Node.js for backend RESTful APIs.",
        "Wrote SQL queries and MongoDB aggregations for data updating and retrieval. Also used various ORMs for developing applications",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "Feburay 2020 – December 2020",
      cardTitle: "Kellton Solutions Limited",
      cardSubtitle: "Software Developer Internship",
      cardDetailedText:
        "Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Nodejs. These API's are being consumed in the frontend.",
    },
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
