import MarkdownRenderer from "@/utills/MarkDownRenderer";
import { client } from "@/lib/client";
import { AboutQuery } from "@/query/querys";

async function LegalPage() {
  let aboutData = await client.fetch(
    AboutQuery,
    {},
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  let data = aboutData[0];
  return (
    <div className="mx-auto max-w-4xl my-8 px-4">
      {/* Main Title */}

      <p className="text-xs sm:text-sm font-inter md:text-base text-zinc-700 mt-2">
        ** read all the details carefully **
      </p>

      {/* Terms of Service Section */}
      <div className="section my-6" id="about-us">
        {data.aboutUs && <MarkdownRenderer markdownContent={data.aboutUs} />}
      </div>

      {/* Privacy Policy Section */}
      <div className="section my-6" id="contact-us">
        {data.contactUs && (
          <MarkdownRenderer markdownContent={data.contactUs} />
        )}
      </div>
    </div>
  );
}

export default LegalPage;
