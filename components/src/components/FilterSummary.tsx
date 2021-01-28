import * as React from 'react'
import { SelectedFilters, SelectedFilter } from "../types/Filters";
import { Map } from 'immutable'
import './FilterSummary.scss'

export interface FilterSummaryProps {
    filters: SelectedFilters;
}

interface FilterIndicatorListProps {
    filterClass: string;
    filters: Map<string, SelectedFilter>;
    title?: string;
    indicateNoFilters?: boolean;
}

interface AssayFilterIndicatorListProps {
    filters: Map<string, Map<string, SelectedFilter>>;
    title?: string;
    indicateNoFilters?: boolean
}

interface FilterIndicatorFlagProps {
    dim: string;
    filter: SelectedFilter;
    level: string;
}


// Filter stuff... ========================================================
export const FilterSummary = (props: FilterSummaryProps) => {

    // if (props.filters.subject.size != 0) debugger;

    return (
        <div className="row filterbar">
            <div className="col-sm-4">
                <FilterIndicatorList
                    filterClass={"Study"}
                    filters={props.filters.Study}
                    title={"Study Design"}
                    indicateNoFilters={true} />
            </div>
            <div className="col-sm-4">
                <FilterIndicatorList
                    filterClass={"Subject"}
                    filters={props.filters.Subject}
                    title={"Participant Characteristics"}
                    indicateNoFilters={true}  />
            </div>
            <div className="col-sm-4">
                <AssayFilterIndicatorList
                    filters={props.filters.Data}
                    title={"Assay Data"}
                    indicateNoFilters={true}  />
            </div>
        </div>
    )
}

export const AssayFilterIndicatorList: React.FC<AssayFilterIndicatorListProps> = ({filters, title, indicateNoFilters}) => {
    let filterFlags;
    if (filters.size == 0 ||
        (filters.getIn(["Assay", "Timepoint"]) == undefined &&
            filters.getIn(["Assay", "Assay"]) == undefined &&
            filters.getIn(["Assay", "SampleType"]) == undefined &&
            filters.getIn(["SampleType", "SampleType"]) == undefined &&
            filters.getIn(["SampleType", "Assay"]) == undefined &&
            filters.getIn(["Timepoint", "Timepoint"]) == undefined &&
            filters.getIn(["Timepoint", "SampleType"]) == undefined)) {
                if (indicateNoFilters) {
                    filterFlags = <em className="filter-indicator no-filters">No filters currently applied</em>
                } else {
                    filterFlags = <></>
                }
        
    } else {
        // These should be in the same order as the filter indicators in the banner
        const filterMap = Map<string, SelectedFilter>({
            "Assay.Assay": filters.getIn(["Assay", "Assay"]),
            "Assay.Timepoint": filters.getIn(["Assay", "Timepoint"]),
            "Assay.SampleType": filters.getIn(["Assay", "SampleType"]),
            "Timepoint.Timepoint": filters.getIn(["Timepoint", "Timepoint"]),
            "Timepoint.SampleType": filters.getIn(["Timepoint", "SampleType"]),
            "SampleType.SampleType": filters.getIn(["SampleType", "SampleType"]),
            "SampleType.Assay": filters.getIn(["SampleType", "Assay"]),
        })
        const prefixes = {
            "Assay.Assay": "Assays: ",
            "Assay.Timepoint": "Assays at Timepoint: ",
            "Assay.SampleType": "Assays at Timepoint for Sample Type: ",
            "Timepoint.Timepoint": "Timepoints: ",
            "Timepoint.SampleType": "Timepoints for Sample Type: ",
            "SampleType.SampleType": "Sample Types: ",
            "SampleType.Assay": "Assays for Sample Type: ",
        }
        const filterText = filterMap.map((e, i) => {
            if (e === undefined) return (undefined);

            const getText = (m: string, level: string) => {
                if (level == "Assay.SampleType") {
                    const assay = m.split(/\./)[0]
                    const timepoint = m.split(/\./)[1]
                    const sampleType = m.split(/\./)[2]
                    return (assay + " at Day " + timepoint + " for " + sampleType)
                }
                if (level == "Assay.Timepoint") {
                    const assay = m.split(/\./)[0]
                    const timepoint = m.split(/\./)[1]
                    return (assay + " at Day " + timepoint)
                }
                if (level == "SampleType.Assay") {
                    const assay = m.split(/\./)[1]
                    const sampleType = m.split(/\./)[0]
                    return (assay + " for " + sampleType)
                }
                if (level == "Timepoint.Timepoint") {
                    return "Day " + m
                }
                if (level == "Timepoint.SampleType") {
                    const timepoint = m.split(/\./)[0]
                    const sampleType = m.split(/\./)[1]
                    return "Day " + timepoint + " for " + sampleType
                }
                return(m)
            }
            const textArray = e.get("members").map((m) => getText(m, i))
            return(textArray.join(" " + e.get("operator") + " "))
        })

        filterFlags = filterText.map((text, i) => {
            if (text == undefined) return (undefined)
            return (
                <Flag dim="Data" >
                    <b>{prefixes[i]}</b>{text}
                </Flag>
            )
        }).valueSeq()
    }


    return (
        <div>
            {title && <h4>{title}</h4>}
            {filterFlags}
        </div>
    )
}

export const FilterIndicatorList: React.FC<FilterIndicatorListProps> = ({ filterClass, filters, title, indicateNoFilters }) => {
    // props: filter class, filters, title text
    let filterFlags
    // debugger;
    if (filters.size == 0) {
        if (indicateNoFilters) {
            filterFlags = <em className="filter-indicator no-filters">No filters currently applied</em>
        } else {
            filterFlags = <></>
        }
        
    } else {
        const filterKeys = filters.keySeq();
        filterFlags = filterKeys.map((key: string) => {
            return (<FilterIndicatorFlag key={filters.getIn([key, "members"])} dim={filterClass} filter={filters.get(key)} level={key} />)
        })
    }
    return (
        <div>
            {title && <h4>{title}</h4>}
            {filterFlags}
        </div>
    )
}
interface FlagProps {
    dim: string;
}

interface FilterDeletorProps {
    dim: string;
    onDelete: () => void;
}
export const Flag: React.FC<FlagProps> = ({ dim, children }) => {
    return (
        <div className={"filter-indicator " + dim}>
                {children}
        </div>
    )
}
const FilterIndicatorFlag: React.FC<FilterIndicatorFlagProps> = ({ dim, filter, level }) => {
    const text = filter.members.join(" " + filter.operator + " ")

    return (
        <Flag dim={dim}>
            <b>{level}: </b>{text}
        </Flag>
    )
}

export const FilterDeletor: React.FC<FilterDeletorProps> = ({dim, onDelete, children}) => {
    return <div className={"filter-deletor " + dim} onClick={onDelete}>
        <span>
            {children}
        </span>
        <i className="fa fa-times"></i>
    </div>
}
