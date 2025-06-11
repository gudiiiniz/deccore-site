import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const contactFormSchema = z.object({
  company: z.string(),
  responsible: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string()
});

type ContactFormSchema = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleContactForm = (data: ContactFormSchema) => {
    console.log(data);
    reset();
  }

  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center py-20">
      <h2 className="text-2xl text-center text-[#0E0458] font-semibold mb-4">
        Atendimento ao Cliente
      </h2>
      <form onSubmit={handleSubmit(handleContactForm)} className="flex flex-col p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm text-gray-700">
              Empresa
            </label>
            <input
              id="company"
              type="text"
              className="w-full border border-gray-300 p-2"
              {...register("company")}
            />
          </div>
          <div>
            <label
              htmlFor="responsible"
              className="block text-sm text-gray-700"
            >
              Responsável
            </label>
            <input
              id="responsible"
              type="text"
              className="w-full border border-gray-300 p-2"
              {...register("responsible")}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 p-2"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm text-gray-700">
              Telefone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full border border-gray-300 p-2"
              {...register("phone")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-gray-700">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full border border-gray-300 p-2"
            {...register("message")}
          />
        </div>
        <Button type="submit" className="w-1/5 mx-auto cursor-pointer bg-[#0E0458] hover:bg-[#041858] text-white">
          Enviar
        </Button>
      </form>
    </div>
  );
}
