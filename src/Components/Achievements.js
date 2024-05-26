import hackerRank from "./images/160_Hackerrank_logo_logos-512.webp";
import iPro from "./images/iPro.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            img: hackerRank,
            cardTitle: "Problem Solving (Basic) Certificate",
            cardText: "Issued on: <br/> July 19, 2022",
            btnText: "See Credential",
            btnUrl: "https://www.hackerrank.com/certificates/c08c9a68284b",
        },
        {
            img: hackerRank,
            cardTitle: "JavaScript (Basic) Certificate",
            cardText: "Issued on: <br/> April 2, 2022 ",
            btnText: "See Credential",
            btnUrl: "https://www.hackerrank.com/certificates/c0fb80360b2d",
        },
        {
            img: hackerRank,
            cardTitle: "JavaScript (Intermediate) Certificate",
            cardText: "Issued on: <br/> April 2, 2022",
            btnText: "See Credential",
            btnUrl: "https://www.hackerrank.com/certificates/80145f094915",
        },
        {
            img: iPro,
            cardTitle: "Star of the Month",
            cardText: "Issued on: <br/> April 30, 2024",
            btnText: "See Credential",
            btnUrl: "https://www.linkedin.com/posts/amanpawar_starofthemonth-employeerecognition-teamwork-activity-7196187491589083136-VMEh?utm_source=share&utm_medium=member_desktop",
        },
        // {
        //     img: google_assistant,
        //     cardTitle: "Google Assistant Developer",
        //     cardText: "Developed a game called Amazing Riddles.",
        // },
        // {
        //     img: google_assistant,
        //     cardTitle: "Google Assistant Developer",
        //     cardText: "Developed a game called Amazing Riddles.",
        // },
        // {
        //     img: google_assistant,
        //     cardTitle: "Google Assistant Developer",
        //     cardText: "Developed a game called Amazing Riddles.",
        // },
        // {
        //     img: google_assistant,
        //     cardTitle: "Google Assistant Developer",
        //     cardText: "Developed a game called Amazing Riddles.",
        // },
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div className="rows" style={{
                    overflow: "auto",
                    display: "flex",
                    flexWrap: "nowrap",
                }}>
                    {items.map((data, i) => (
                        <div
                            // class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#343a40",
                                    padding: "20px",
                                    marginLeft: "20px",
                                    height: "30rem"
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Achievements;
