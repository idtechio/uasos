export type CompositionGridProps = {
	children: JSX.Element[] | JSX.Element
	spaceing?: [number, number]
	mobileReverse?: boolean
	itemsPerRow?: number
	alignItems?: "center" | "flex-end" | "fles-start" | "unset"
	disableRwd?: boolean
}