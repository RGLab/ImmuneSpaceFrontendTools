import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { StudyCard, StudyCardVerTwo, StudyCardProps } from "./StudyCard";
import { IStudyInfo } from "../types/StudyCard";

export default {
    title: "StudyCard",
    component: StudyCard,
} as Meta;

const studyInfo: IStudyInfo = {
    assays: "Gene Expression",
    brief_title: "Immunity to Smallpox Vaccination",
    research_focus: "Vaccine Response",
    pi_names: "Jeffrey Gulcher",
    program_title: "Population Genetics Analysis Program (1)",
    restricted: false,
    sample_type: "Other",
    shared_study: "none",
    study_accession: "SDY230",
    totalParticipantCount: 10,
    container_id: "234234",
    start_date: "Fri Mar 19 2021",
};

const studyInfo2: IStudyInfo = {
    assays: "ELISA, ELISPOT, FCS control files, FCS sample files, Flow Cytometry, Gene Expression, HAI, MBAA",
    brief_title:
        "Plasmablast response to inactivated and live attenuated influenza vaccines (TIV3/TIV3 ID/LAIV) SLVP021 2011",
    research_focus: "Vaccine Response",
    pi_names: "Harry Greenberg",
    program_title: "Human Immunology Project Consortium (HIPC) RFA-AI-14-007, RFA-AI-09-040",
    restricted: false,
    sample_type: "Other, PBMC, Plasma, Serum",
    shared_study: "none",
    study_accession: "SDY113",
    totalParticipantCount: 70,
    container_id: "234234",
    start_date: "Fri Mar 19 2021",
};

const OriginalTemplate: Story<StudyCardProps> = (args) => <StudyCard {...args} />;
export const Original = OriginalTemplate.bind({});
Original.args = {
    key: "12334",
    participantCount: 10,
    ...studyInfo,
};

const NewTemplate: Story<StudyCardProps> = (args) => <StudyCardVerTwo {...args} />;
export const NewVerOne = NewTemplate.bind({});
NewVerOne.args = {
    ...Original.args,
};

export const NewVerTwo = NewTemplate.bind({});
NewVerTwo.args = {
    key: "12335",
    participantCount: 70,
    ...studyInfo2,
};
