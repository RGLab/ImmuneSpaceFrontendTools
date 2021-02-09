// TODO: Move this into utils/helper package instead.

export interface LabKey {
    defaultHeaders: any;
    devMode: boolean;
    container: any;
    contextPath: string;
    moduleContext: any;
    user: any;
    vis: any;
}
export interface SelectRowsResponse {
    schemaName: string;
    queryName: string;
    formatVersion: number;
    metaData: SelectRowsMetadata;
    rowCount: number;
    rows: any[];
}
export interface SelectRowsMetadata {
    description: string;
    fields: any[];
    id: string;
    importMessage: string;
    importTemplates: any[];
    root: string;
    title: string;
    totalProperty: string;
}

// ---------- Cube ---------- //
export interface Cube {
    description: string;
    dimensions: CubeDimension[];
    name: string;
}
export interface CubeDimension {
    cube: Cube;
    hierarchies: CubeHierarchy[];
    id: string;
    name: string;
    uniqueName: string;
}
export interface CubeHierarchy {
    dimension: CubeDimension;
    id: string;
    levels: CubeLevel[];
    name: string;
    uniqueName: string;
}
export interface CubeLevel {
    depth: number;
    hierarchy: CubeHierarchy;
    id: string;
    name: string;
    propertyName: string[];
    uniquename: string;
}
export interface CubeCell {
    coordinateList: number[];
    positions: CubePosition[][];
    value: number;
}
export interface CubePosition {
    level: CubeLevel;
    name: string;
    ordinal: number;
    uniqueName: string;
}
export interface CubeAxis {
    axisOrdinal: string;
    positions: CubePosition[][];
}
export interface AxesMedataData {
    axisOrdinal: string;
    hierarchies: string[];
}
export interface CubeMetadata {
    cube: Cube;
    axesMetaData: AxesMedataData;
}
export interface CellSet {
    axes: CubeAxis[];
    cells: CubeCell[][];
    metadata: CubeMetadata;
}
