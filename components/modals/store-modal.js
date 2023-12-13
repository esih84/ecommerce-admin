import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";

const StoreModal = () => {
    const storeModal = useStoreModal()
    return (
        <Modal title="create store" 
        description="add a new store to 
        manage products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            
        </Modal>
    );
}

export default StoreModal;