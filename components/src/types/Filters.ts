import { List, Record, fromJS, Map } from 'immutable'


export class TotalCounts extends Record ({
    study: 0,
    participant: 0
}) {
    study: number
    participant: number

    constructor(params?: {study?: number, participant?: number}) {
        params ? super(params) : super()
    }
}


export interface Filter {
    level: string,
    member: string
}

export interface ISelectedFilter {
    members?: string[] | List<string>;
    operator?: string
}

export class SelectedFilter extends Record({
    members: List<string>(),
    operator: "OR"
}) {
    members: List<string>;
    operator: string;

    constructor(params?: ISelectedFilter) {
        params ? super(fromJS(params)) : super()
    }

    with(values: ISelectedFilter) {
        return this.merge(fromJS(values)) as this;
    }
}

export interface ISelectedFilters {
    Subject?: { [index: string]: SelectedFilter };
    Study?: { [index: string]: SelectedFilter };
    Data?: { [index: string]: { [index: string]: SelectedFilter } }
}

export class SelectedFilters extends Record({
    Subject: Map<string, SelectedFilter>(),
    Study: Map<string, SelectedFilter>(),
    Data: Map<string, Map<string, SelectedFilter>>({
        Assay: Map<string, SelectedFilter>(),
        Timepoint: Map<string, SelectedFilter>(),
        SampleType: Map<string, SelectedFilter>()
    }
        
    )
}) {
    Subject: Map<string, SelectedFilter>;
    Study: Map<string, SelectedFilter>;
    Data: Map<string, Map<string, SelectedFilter>>;

    constructor(params?: ISelectedFilters) {
        if (params) {
            const subject = params.Subject ?  Map(params.Subject).map(f => new SelectedFilter(f)) : Map<string, SelectedFilter>()
            const study = params.Study ? Map(params.Study).map(f => new SelectedFilter(f)) : Map<string, SelectedFilter>()
            const data = Map({
                Assay: (params.Data && params.Data.Assay) ? Map(params.Data.Assay).map(f => new SelectedFilter(f)) : Map<string, SelectedFilter>(),
                Timepoint: (params.Data && params.Data.Timepoint) ? Map(params.Data.Timepoint).map(f => new SelectedFilter(f)) : Map<string, SelectedFilter>(),
                SampleType: (params.Data && params.Data.SampleType) ? Map(params.Data.SampleType).map(f => new SelectedFilter(f)) : Map<string, SelectedFilter>()
            })
            super({Subject: subject, Study: study, Data: data})
        } else {
            super()
        }
    }

    with(values: ISelectedFilters) {
        return this.merge(fromJS(values)) as this;
    }
}


export interface FilterQuery {
    level: string;
    membersQuery: {
        level: string;
        members: string[] | string;
    }[]
}




export interface IBannerInfo {
    groupName?: string,
    counts?: TotalCounts,
    unsavedFilters?: boolean
}
export class BannerInfo extends Record({
    groupName: "",
    counts: { study: 0, participant: 0 },
    unsavedFilters: false
}) {
    groupName: string
    counts: TotalCounts
    unsavedFilters: boolean

    constructor(params?: IBannerInfo) {
        params ? super(params) : super()
    }

    with(values: IBannerInfo) {
        return this.merge(values) as this;
    }
}

export interface FilterCategory {
    label: string;
    sortorder: number
}

export interface FilterCategories {
    [index: string]: FilterCategory[]
}

