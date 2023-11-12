import Contacts from "./Contacts";

export default function ContactMe() {
  return (
    <div id="contactMe" className="text-center flex flex-col justify-center h-screen">
      <h2 className="mb-20">Connect with me</h2>
      <Contacts inline />
    </div>
  );
}
