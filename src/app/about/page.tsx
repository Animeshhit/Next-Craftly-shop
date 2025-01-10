import MarkdownRenderer from "@/components/ProductDescription";
import { client } from "@/lib/client";
import { AboutQuery } from "@/query/querys";

async function AboutPage() {
  let AboutData = await client.fetch(
    AboutQuery,
    {},
    { cache: "no-store" }
  );
  let data = AboutData[0];
  return (
    <div className="mx-auto max-w-4xl my-8 px-4">
      {/* Main Title */}

      <p className="text-xs sm:text-sm md:text-base text-zinc-700 mt-2">
        ** read all the details carefully **
      </p>

      {/* Terms of Service Section */}
      <div className="section my-6" id="aboutUs">
        {data.aboutUs && (
          <MarkdownRenderer markdownContent={data.aboutUs} />
        )}
      </div>

      <div className="section my-6" id="contactUs">
        {data.contactUs && (
          <MarkdownRenderer markdownContent={data.contactUs} />
        )}
      </div>

      
    </div>
  );
}

export default AboutPage;
