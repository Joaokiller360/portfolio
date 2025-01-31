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
  titleProject?: string;
  clientProject?: string;
  description?: string;
  hrfCode?: string;
  hrfDemo?: string;
  tag?: { name: string; icon: React.ReactNode }[];
}

export function ModalPreview({
  titleProject = '',
  clientProject = '',
  description = '',
  hrfCode = '',
  hrfDemo = '',
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
                  <p className='text-2xl'>Nombre del proyecto:</p>
                  <p className="text-xl font-semibold pt-2">{titleProject}</p>
                </div>
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
                      <Tags tag={tag} />
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