import { contact, pages } from "../data/content.js";
import "./Pages.css";

export default function Help() {
  return (
    <section className="page wrap" aria-labelledby="help-title">
      <h1 id="help-title">{pages.helpTitle}</h1>
      <p className="page-copy">{pages.helpBody}</p>
      <p className="page-copy">
        <a href={contact.email.href}>{contact.email.href.replace("mailto:", "")}</a>
      </p>
    </section>
  );
}
