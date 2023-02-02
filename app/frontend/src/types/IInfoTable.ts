export default interface IInfoTable {
	name: string
	title: string[]
	data: ITableRow[]
	pages: number
}

interface ITableRow {
	[index: number]: ITableCol
}

interface ITableCol {
	type: string
	row: string
}
