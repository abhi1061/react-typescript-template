import React from 'react'
import styled from 'styled-components'

const SearchBar = styled.input`
	background: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.color};
`
interface SearchBarProps {
	onChangeText(text: string): void
}

export const SearchBarComponent = ({ onChangeText }: SearchBarProps) => {
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		onChangeText(e.target.value)
	}
	return <SearchBar onChange={onChange} />
}
