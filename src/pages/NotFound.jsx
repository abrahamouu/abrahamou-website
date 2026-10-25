import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageIntro } from "@/components/PageIntro";

export const NotFound = () => (
  <section className="not-found">
    <PageIntro label="404 / Not found" title="A loose connection.">
      The page you opened does not exist on this site.
    </PageIntro>
    <Link to="/" className="primary-button">
      Back home <ArrowRight size={18} />
    </Link>
  </section>
);
