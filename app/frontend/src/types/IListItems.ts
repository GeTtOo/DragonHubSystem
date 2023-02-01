export default interface IListItems {
	name: string,
	list: IPlayers[]
}

interface IPlayers {
	id: number,
	name: string,
	url: string
}