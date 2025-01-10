interface CaseStudyULProps {
  options: { title: string; description: string }[];
}

export default function CaseStudyUL({ options }: CaseStudyULProps) {
  return (
    <ul className="list-disc ml-4 md:ml-8 space-y-6">
      {options.map((item) => (
        <li key={item.title}>
          <h3 className="inline-block text-lg">{item.title}</h3>:{" "}
          <span>{item.description}</span>
        </li>
      ))}
    </ul>
  );
}
