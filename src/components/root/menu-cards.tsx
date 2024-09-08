import { Card } from "flowbite-react/components/Card";

export function MenuCards() {

  const cardContent = [
    {
      title: "AI Cover Letter Drafter",
      href: "/drafter",
      description: "Let AI read the job description and help you to do the first drafter based on your resume, we never save your resume."
    },
    {
      title: "QR Code Generator",
      href: "/qr",
      description: "Don't want to pay for QR Code Generator? Here you go."
    },
    {
      title: "QR Code Generator",
      href: "/qr",
      description: "Don't want to pay for QR Code Generator? Here you go."
    },
    {
      title: "AI Cover Letter Drafter",
      href: "/drafter",
      description: "Let AI read the job description and help you to do the first drafter based on your resume, we never save your resume."
    },
    {
      title: "QR Code Generator",
      href: "/qr",
      description: "Don't want to pay for QR Code Generator? Here you go."
    },
    {
      title: "QR Code Generator",
      href: "/qr",
      description: "Don't want to pay for QR Code Generator? Here you go."
    },
  ]


  return (
    <section className="grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
    
      {cardContent.map((card, id) => (

        <Card key={id} href={card.href} className="max-w-sm justify-self-center">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
          </h5>
          <p className="text-left font-normal text-gray-700 dark:text-gray-400">
            {card.description}
          </p>
        </Card>
      ))}

    </section>
  );

}