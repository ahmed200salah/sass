import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

export const FAQs = () => {
  return (
    <div className=" bg-black text-white py-12 bg-gradient-to-t from-black to-[#5D2CA8]">
      <div className="container flex flex-col gap-7">
        <h2 className="text-5xl font-bold tracking-tighter text-center max-md:text-3xl faq">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className=" w-[800px] mx-auto max-md:w-[360px]">
          {items.map((item,i) => (
            <AccordionItem key={i} value={`${i+1}`} className="py-6 faq">
              <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
              <AccordionContent className="text-lg text-gray-400">{item.answer}</AccordionContent>
              </AccordionItem>
              ))}
        </Accordion>
      </div>
    </div>
  );
};
