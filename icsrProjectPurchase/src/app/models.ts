export interface Purchase{
	itemdesc : string,
	itemcategory : string | undefined,
	quantity : number,
	estimatedcost : number | undefined,
	preferredvendors : undefined | string[],
	justification : string,
	document : pdf|undefined

}

export enum Status{
    PENDING = "Pending",
    FORWARDED = "Forwarded to vendor",
    REJECTED = "Rejected",
	APPROVED = "Approved",
	RECIEVED = "Item recieved",
	CLARIFICATION = "Sent back",
	ACCOUNTS = "Forwarded to Accounts"

}

export interface Budget{
    yearNo: number;
    equipments: number;
    consumables: number;
    contingency: number;
    travel: number;
    manpower: number;
    overhead: number;
};
export interface pdf{
	name :string,
	url : string
}

export interface statusp{
	status : Status,
	by : string | undefined,
	date : Date
}

export interface Project {
	projectname : string,
	projectid : string,
	projectduration : number,
	projectgrantno : number,
	faculty : string,
	facultydept : string
	facultyemail : string,
    facultyphone : number,
	projectcategory : string,
	description : string|undefined,
	totalcost : number,
	purchases : Purchase[],
	budget : Budget[],
	documents : pdf[] | undefined,
	status : statusp,
	statushist : statusp[],
	remarks : string | undefined
}
