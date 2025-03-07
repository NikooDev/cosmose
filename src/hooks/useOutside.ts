import React, { useEffect } from 'react'

const useOutside = (ref: React.MutableRefObject<HTMLDivElement | HTMLUListElement>, handler: React.Dispatch<React.SetStateAction<MouseEvent | TouchEvent>>) => {

	useEffect(() => {
		const pageClickEvent = (event: MouseEvent | TouchEvent) => {
			let target = event.target as HTMLDivElement | HTMLUListElement
			if(!ref.current || ref.current.contains(target)) return
			handler(event)
		}

		document.addEventListener('mousedown', pageClickEvent)
		document.addEventListener('touchstart', pageClickEvent)

		return () => {
			document.removeEventListener('mousedown', pageClickEvent)
			document.removeEventListener('touchstart', pageClickEvent)
		}
	}, [ref.current, handler])

}

export default useOutside
