import "./ContactformStyles.css";

export default function ContactForm() {
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email id" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
