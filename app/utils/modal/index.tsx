import { ButtonModal, Tags } from '@/app/utils'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from '@heroui/button'

interface ModalDescriptions {
  clientProject?: string;
  description?: string;
  hrfCode?: string;
  hrfDemo?: string;
  tag?: {
    id: number;
    IconName: string;
    Icon: string | null // El tipo ahora es ReactNode, no un string
  }[];
}

export function ModalPreview({
  clientProject = '',
  description = '',
  tag = [],
}: ModalDescriptions) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <ButtonModal text="Saber mas del proyecto" onOpen={onOpen} />
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='text-black'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div>
                  <p className='text-2xl'>Nombre del Cliente:</p>
                  <p className="text-xl font-semibold pt-2">{clientProject}</p>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className='pb-2'>
                    <p className='text-lg'>Descripcion del proyecto:</p>
                    <p>
                      {description}
                    </p>
                  </div>
                  <div>
                    <p className='text-lg'>Tecnologias que se uso:</p>
                    <div className='pt-2'>
                      <Tags tag={tag?.map(t => ({
                        id: t.id,
                        IconName: t.IconName, // Asegura que coincide con la estructura esperada
                        Icon: t.Icon // Mantiene la consistencia si es correcto
                      }))} />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}