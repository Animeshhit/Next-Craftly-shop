import MarkdownRenderer from "@/components/ProductDescription";
import { client } from "@/lib/client";
import { AboutQuery } from "@/query/querys";

async function AboutPage() {
  let aboutData = await client.fetch(
    AboutQuery,
    {},
    { cache: "no-store" }
  );
  let data = aboutData[0];
  return (
    <div className="mx-auto max-w-4xl my-8 px-4">
      {/* Main Title */}

     

      {/* Terms of Service Section */}
      <div className="section my-6" id="aboutUs">
        {data.aboutUs && (
          <MarkdownRenderer markdownContent={data.aboutUs} />
        )}
      </div>

    </div>
  );
}

export default AboutPage;
