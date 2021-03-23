import * as React from "react";
import { IStudyInfo } from "../types/StudyCard";
//import { TinyHeatmap } from "../components/TinyHeatmap";
import "./StudyCard.scss";
import "./StudyCardNew.scss";
import { Card } from "react-bootstrap";
import { BsCalendarFill, BsFillPersonCheckFill } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";

// Types
interface StudyPropertyProps {
    key: string;
    label: string;
    value: string;
}

interface StudyPropertiesProps {
    studyProperties: StudyProperty[];
}

interface StudyProgressBarProps {
    totalParticipantCount: number;
    selectedParticipantCount: number;
}

interface StudyProperty {
    label: string;
    value: string;
}

interface StudyPropertyVerTwo {
    label: any;
    value: string;
    color?: string;
}

interface StudyPropertyPropsVerTwo {
    label: any;
    value: string;
    color?: string;
}

export interface StudyCardProps {
    key: string;
    assays?: string;
    brief_title?: string;
    research_focus?: string;
    //heatmapData?: HeatmapDatum<any>[];
    pi_names?: string;
    program_title?: string;
    restricted?: boolean;
    sample_type?: string;
    shared_study?: string;
    study_accession?: string;
    totalParticipantCount?: number;
    container_id: string;
    //heatmapInfo: TinyHeatmapInfo;
    start_date?: string;
    participantCount: number;
}

// Components
const StudyProperty: React.FC<StudyPropertyProps> = (props) => {
    const labelStyle: React.CSSProperties = {
        fontWeight: "bold",
    };
    return (
        <p className="card-text">
            <span style={labelStyle}>{props.label}: </span>
            {props.value}
        </p>
    );
};

const StudyProperties: React.FC<StudyPropertiesProps> = (props) => {
    const studyProperties = props.studyProperties.map((property) => {
        return <StudyProperty key={property.label} label={property.label} value={property.value} />;
    });

    return <div className="study-properties">{studyProperties}</div>;
};

const StudyProgressBar: React.FC<StudyProgressBarProps> = (props) => {
    const pbarStyle = {
        width: (props.selectedParticipantCount / props.totalParticipantCount) * 100 + "%",
    };
    return (
        <div>
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={props.selectedParticipantCount}
                    aria-valuemin={0}
                    aria-valuemax={props.totalParticipantCount}
                    style={pbarStyle}
                ></div>
            </div>
            <p>
                <em>
                    {props.selectedParticipantCount} of {props.totalParticipantCount} participants selected.
                </em>
            </p>
        </div>
    );
};

export const StudyCardFC: React.FC<StudyCardProps> = (props) => {
    //const study = props.study;
    const formatDate = (datez: string): string => {
        const date = new Date(datez);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    const studyProperties: StudyProperty[] = [
        {
            label: "Research Focus",
            value: props.research_focus,
        },
        {
            label: "Sample Type",
            value: props.sample_type,
        },
        {
            label: "Assays",
            value: props.assays,
        },
    ];
    const authors = props.pi_names.split(",");
    const author = authors.length > 1 ? authors[0] + " et. al." : authors[0];

    return (
        <div className="study-card">
            <div className="study-label">
                <span className="study-id">{props.study_accession}</span>
                <span className="study-pi">{author}</span>
            </div>
            <hr />
            <a href={"./" + props.study_accession + "/begin.view?"} className="labkey-text-link labkey-study-card-goto">
                learn more
            </a>
            <div className="study-title">{props.brief_title}</div>
            <div>{formatDate(props.start_date)}</div>
            <div>{props.program_title}</div>
            <StudyProgressBar
                totalParticipantCount={props.totalParticipantCount}
                selectedParticipantCount={props.participantCount}
            />
            <StudyProperties studyProperties={studyProperties} />
            <hr></hr>
            {/* //<TinyHeatmap name={study.study_accession} heatmapInfo={study.heatmapInfo} /> */}
        </div>
    );
};

interface ListItemWrapperProps {
    color?: string;
}

const ListItemWrapper: React.FC<ListItemWrapperProps> = ({ color, children }) => {
    const bgColor = color ?? "#FFC0CB";
    const backgroundStyle: React.CSSProperties = {
        backgroundColor: bgColor,
    };
    return (
        <div style={backgroundStyle} className="study-property-wrapper">
            {children}
        </div>
    );
};

const StudyPropertyTwo: React.FC<StudyPropertyPropsVerTwo> = (props) => {
    const labelStyle: React.CSSProperties = {
        fontWeight: "bold",
    };
    const propertyValueArray = props.value.split(","); //this an array
    return (
        // <p className="card-text">
        //     <span style={labelStyle}>{props.label}: </span>
        //     {props.value}
        // </p>
        <div className="study-properties-new">
            <span className="study-property-label" style={labelStyle}>
                {props.label}:{" "}
            </span>
            {propertyValueArray.map((val) => {
                return <ListItemWrapper color={props.color}>{val.trim()}</ListItemWrapper>;
            })}
        </div>
    );
};

export const StudyCardVerTwo: React.FC<StudyCardProps> = (props) => {
    //const study = props.study;
    const formatDate = (datez: string): string => {
        const date = new Date(datez);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };
    const studyProperties: StudyPropertyVerTwo[] = [
        {
            label: "Research Focus",
            value: props.research_focus,
            color: "#22BA6A",
        },
        {
            label: "Sample Type",
            value: props.sample_type,
            color: "#F4E14E",
        },
        {
            label: "Assays",
            value: props.assays,
        },
    ];
    const authors = props.pi_names.split(",");
    const author = authors.length > 1 ? authors[0] + " et. al." : authors[0];

    return (
        <Card style={{ width: "280px" }}>
            <Card.Header>
                <div>
                    <span className="study-id">{props.study_accession}</span>
                    <span className="study-pi">{author}</span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.brief_title}</Card.Title>
                <Card.Subtitle className="study-subtitle">
                    <div className="study-meta-wrapper">
                        <div className="participant-details">
                            <BsCalendarFill size={16} className="participant-icon" />
                            <span className="participant-count">{formatDate(props.start_date)}</span>
                        </div>
                        <div className="participant-details">
                            <BsFillPersonCheckFill size={18} className="participant-icon" />
                            <span className="participant-count">{`${props.participantCount}/${props.totalParticipantCount}`}</span>
                        </div>
                    </div>
                    <div className="institution-meta-container">
                        <span className="institution-name">
                            <FaSchool className="institution-icon" size={16} />
                            {`${props.program_title}`}
                        </span>
                    </div>
                </Card.Subtitle>

                <br />
                {studyProperties.map((property, index) => {
                    return (
                        <StudyPropertyTwo
                            key={property.label}
                            label={property.label}
                            value={property.value}
                            color={property.color}
                        />
                    );
                })}
            </Card.Body>
            <Card.Footer>
                <a href="#">Learn more</a>
            </Card.Footer>
        </Card>
    );
};

export const StudyCard = React.memo(StudyCardFC);
