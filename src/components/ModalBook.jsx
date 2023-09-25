import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ModalBook ({
  title,
  _id,
  isOpen,
  onOpenChange
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              Soy una descripcion de {title}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Link
                to={`/book/${_id}`}>
                <Button color="primary" onPress={onClose}>
                  Leer
                </Button>
              </Link>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
