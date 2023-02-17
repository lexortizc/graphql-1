import { useState } from "react"


export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  const handleModal = (selectedItem, isOpen) => {
    setSelectedItem(selectedItem)
    setIsOpen(isOpen)
  }

  return {
    isOpen,
    selectedItem,
    handleModal,
    setIsOpen,
    setSelectedItem
  }
}