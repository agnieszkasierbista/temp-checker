export interface SearchButtonProps {
  dispatchSearch: (userInput: string) => void,
  userInput: string,
  isSearching: boolean
}
