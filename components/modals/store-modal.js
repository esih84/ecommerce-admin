import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Username must be at least 1 characters.",
  }),
});

const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Modal
      title="create store"
      description="add a new store to 
        manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className=" space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input placeholder="E-Commerce" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-x-2 flex items-center justify-end w-full">
                <Button variant="outline" onClick={storeModal.onClose} type="submit">cancle</Button>
                <Button type="submit">create</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default StoreModal;
