export default interface IListItems {
	name: string,
	list: IPlayers[]
}

interface IPlayers {
	name: string,
	url: string
}