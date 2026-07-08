interface GenericPageProps {
  title: string;
  type: string;
}

export default function GenericPage({ title, type }: GenericPageProps) {
  return (
    <div className="w-full">
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-container container-pad py-16 sm:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">{title}</h1>
          <p className="text-lg text-[#64748B] max-w-2xl">
            This is a placeholder page for {title}. In a complete application, this would contain the full content for the {type} section.
          </p>
        </div>
      </div>
      
      <div className="max-container container-pad py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h2>Overview</h2>
          <p>
            AfuChat Technologies Limited is committed to providing a secure, seamless, and integrated ecosystem for all your digital needs. Our terms, policies, and company information are structured to provide full transparency.
          </p>
          <p>
            Please check back later for the complete content of this section, as we are constantly updating our resources.
          </p>
        </div>
      </div>
    </div>
  );
}